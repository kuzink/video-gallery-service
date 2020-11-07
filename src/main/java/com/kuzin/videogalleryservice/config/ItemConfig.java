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
import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;

@Configuration
public class ItemConfig {

	@Value("${videos.location}")
	private String videosLocation;

	@Value("${images.location}")
	private String imagesLocation;

	@Bean
	public List<Item> itemsMappingConfig(final Validator defaultValidator) throws IOException {
		final List<File> videoFiles = getMP4FilesFromVideosLocation();
		final List<Item> items = new ArrayList<>();

		for (int i = 0; i < videoFiles.size(); i++) {
			final String nameWithExtension = videoFiles.get(i).getName();
			final String name = nameWithExtension.substring(0, nameWithExtension.length() - 4);
			items.add(createItem(i, name));
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

	private Item createItem(final int count, final String name) throws IOException {
		final Path path = Paths.get(imagesLocation + "/" + name);

		if (Files.exists(path)) {

			final List<String> images = Files.list(path)
				.map(Path::toFile)
				.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
				.map(File::getName).sorted()
				.collect(toList());

			return new Item(count + 1, name, images);

		} else {
			return new Item(count + 1, name, emptyList());
		}
	}

	private <T> void validateList(final Validator defaultValidator, final List<T> list) {
		list.stream()
			.map(item -> defaultValidator.validate(item))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });
	}

}
