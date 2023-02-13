package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.domain.Item;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.*;
import java.util.*;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;

@Configuration
public class ItemsConfig {

	private static final String INITIAL_THUMBNAIL_POSTFIX = "_init";

	@Value("${videos.location}")
	private String videosLocation;

	@Value("${thumbnails.location}")
	private String thumbnailsLocation;

	@Bean
	public List<Item> items(final Validator defaultValidator) throws IOException {

		final List<File> videoFiles = getMP4FilesFromVideosLocation();
		final List<Item> items = new ArrayList<>();

		for (int i = 0; i < videoFiles.size(); i++) {

			final File videoFile = videoFiles.get(i);

			final String name = videoFile.getName().substring(0, videoFile.getName().length() - 4);
			final String size = convertToHumanReadableByteCount(videoFile.length());

			items.add(createItem(i, name, size));
		}

		validateList(defaultValidator, items);

		return items;
	}

	private List<File> getMP4FilesFromVideosLocation() throws IOException {
		return Files.list(Paths.get(videosLocation))
			.map(Path::toFile)
			.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".mp4"))
			.collect(toList());
	}

	private Item createItem(final int count, final String name, final String size) throws IOException {

		final Path thumbnailsPath = Paths.get(thumbnailsLocation + "/" + name);

		if (Files.exists(thumbnailsPath)) {

			final List<String> thumbnailNames = Files.list(thumbnailsPath)
				.map(Path::toFile)
				.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
				.map(File::getName)
				.sorted()
				.collect(toList());

			final int initialThumbnailIndex = determineInitialThumbnailIndex(thumbnailNames);

			return new Item(count + 1, name, size, thumbnailNames, initialThumbnailIndex);
		} else {
			return new Item(count + 1, name, size, emptyList(), 0);
		}
	}

	private String convertToHumanReadableByteCount(final long bytes) {

		final long absB = bytes == Long.MIN_VALUE ? Long.MAX_VALUE : Math.abs(bytes);

		if (absB < 1024) {
			return bytes + " B";
		}

		long value = absB;
		final CharacterIterator ci = new StringCharacterIterator("KMGTPE");

		for (int i = 40; i >= 0 && absB > 0xfffccccccccccccL >> i; i -= 10) {
			value >>= 10;
			ci.next();
		}
		value *= Long.signum(bytes);

		return String.format("%.2f %cB", value / 1024.0, ci.current())
			.replace(",", ".")
			.replace("B", "b");
	}

	private void validateList(final Validator validator, final List<Item> list) {
		list.stream()
			.map(item -> validator.validate(item))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });
	}

	private int determineInitialThumbnailIndex(final List<String> thumbnailNames) {
		return thumbnailNames.stream()
			.filter(name -> name.contains(INITIAL_THUMBNAIL_POSTFIX))
			.findFirst()
			.map(thumbnailNames::indexOf)
			.orElse(new Random().nextInt(thumbnailNames.size()));
	}

}
