package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.domain.*;
import com.kuzin.videogalleryservice.repository.domain.VideoEntity;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.*;
import java.util.*;
import java.util.concurrent.atomic.*;

import static com.kuzin.videogalleryservice.repository.StartUpDataInitializr.createCategories;
import static com.kuzin.videogalleryservice.util.FileSystemUtil.getSubFoldersNames;
import static java.lang.Integer.parseInt;
import static java.util.Collections.emptyList;
import static java.util.Comparator.comparingInt;
import static java.util.stream.Collectors.toList;

@Configuration
public class BeansConfig {

	private static final String INITIAL_THUMBNAIL_POSTFIX = "_init";
	private static final AtomicInteger ID_COUNTER = new AtomicInteger(-1);

	@Value("${videos.location}")
	private String videosLocation;

	@Value("${thumbnails.location}")
	private String thumbnailsLocation;

	@Value("${slides.location}")
	private String slidesLocation;

	//TODO:
	//1.
	//2.

	@Bean
	public List<String> categories() {
		return createCategories(videosLocation, thumbnailsLocation, slidesLocation);
	}


	@Bean
	public List<VideoEntity> videos() {

		return createVideos();
	}



















//	@Bean
//	public List<String> folderNamesInsideVideosLocation() throws IOException {
//		return Files.list(Paths.get(videosLocation))
//			.map(Path::toFile)
//			.filter(File::isDirectory)
//			.map(File::getName)
//			.sorted()
//			.collect(toList());
//	}
//
//	@Bean
//	@DependsOn({"folderNamesInsideVideosLocation"})
//	public List<String> folderNamesInsideThumbnailsLocation() throws IOException {
//		return Files.list(Paths.get(thumbnailsLocation))
//				.map(Path::toFile)
//				.filter(File::isDirectory)
//				.map(File::getName)
//				.sorted()
//				.collect(toList());
//	}
//
//	@Bean
//	@DependsOn({"folderNamesInsideThumbnailsLocation"})
//	public List<String> folderNamesInsideSlidesLocation() throws IOException {
//		return Files.list(Paths.get(slidesLocation))
//				.map(Path::toFile)
//				.filter(File::isDirectory)
//				.map(File::getName)
//				.sorted()
//				.collect(toList());
//	}
//
//	@Bean
//	@DependsOn({"folderNamesInsideSlidesLocation"})
//	public List<VideoCategory> videoCategories(final List<String> folderNamesInsideVideosLocation,
//											   final List<String> folderNamesInsideThumbnailsLocation,
//											   final List<String> folderNamesInsideSlidesLocation) {
//
//		if (folderNamesInsideVideosLocation.size() == 0
//				|| !folderNamesInsideVideosLocation.equals(folderNamesInsideThumbnailsLocation)
//				|| !folderNamesInsideVideosLocation.equals(folderNamesInsideSlidesLocation)) {
//			throw new RuntimeException("videoCategories() -> error: Data structure is incorrect");
//		}
//
//		return folderNamesInsideVideosLocation.stream()
//			.map(it -> VideoCategory.builder()
//				.id(UUID.randomUUID().toString())
//				.title(it)
//				.build())
//			.collect(toList());
//	}
//
//	@Bean
//	@DependsOn({"videoCategories"})
//	public List<Item> items(final Validator defaultValidator, final List<String> folderNamesInsideVideosLocation) {
//
//		final List<Item> items = new ArrayList<>();
//
//		folderNamesInsideVideosLocation.forEach(folderName -> {
//			final List<File> videoFiles = scanFolderAndGetMP4FilesFromIt(folderName);
//
//			for (final File videoFile : videoFiles) {
//				final String name = videoFile.getName().substring(0, videoFile.getName().length() - 4);
//				final String size = convertToHumanReadableByteCount(videoFile.length());
//
//				items.add(createItem(ID_COUNTER.incrementAndGet(), folderName, name, size));
//			}
//		});
//
//		validateList(defaultValidator, items);
//
//		return items;
//	}
//
//	@Bean
//	@DependsOn({"videoCategories"})
//	public List<SlideGroup> slideGroups(final Validator validator, final List<String> folderNamesInsideSlidesLocation) {
//
//		final List<SlideGroup> slideGroups = new ArrayList<>();
//
//		folderNamesInsideSlidesLocation.forEach(folderName -> {
//			try {
//				final Path path = Paths.get(slidesLocation + "/" + folderName);
//				final List<String> subFolderNames = Files.list(path)
//					.map(Path::toFile)
//					.filter(File::isDirectory)
//					.map(File::getName)
//					.sorted(comparingInt(el -> parseInt(el.split("_")[0])))
//					.collect(toList());
//
//				for (final String subFolderName : subFolderNames) {
//
//					final Path subFolderPath = Paths.get(slidesLocation + "/" + folderName).resolve(subFolderName);
//					final List<String> slideNames = Files.list(subFolderPath)
//							.map(Path::toFile)
//							.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
//							.map(File::getName)
//							.collect(toList());
//
//					slideGroups.add(new SlideGroup(folderName, subFolderName, slideNames));
//				}
//
//			} catch (IOException e) {
//				throw new RuntimeException("slideGroups() -> error: " + e);
//			}
//		});
//
//		validateList(validator, slideGroups);
//
//		return slideGroups;
//	}
//
//	private List<File> scanFolderAndGetMP4FilesFromIt(final String folderName) {
//		try {
//			return Files.list(Paths.get(videosLocation + "/" + folderName))
//				.map(Path::toFile)
//				.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".mp4"))
//				.collect(toList());
//		} catch (IOException e) {
//			throw new RuntimeException("scanFolderAndGetMP4FilesFromIt() -> error");
//		}
//	}
//
//	private Item createItem(final int count, final String folderName, final String name, final String size) {
//
//		final Path thumbnailsPath = Paths.get(thumbnailsLocation + "/" + folderName + "/" + name);
//
//		if (Files.exists(thumbnailsPath)) {
//
//			final List<String> thumbnailNames;
//			try {
//				thumbnailNames = Files.list(thumbnailsPath)
//					.map(Path::toFile)
//					.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
//					.map(File::getName)
//					.sorted()
//					.collect(toList());
//			} catch (IOException e) {
//				throw new RuntimeException("createItem() -> error");
//			}
//
//			final int initialThumbnailIndex = determineInitialThumbnailIndex(thumbnailNames);
//			final byte[] initialThumbnail =
//					getInitialThumbnailBytes(folderName, name, thumbnailNames, initialThumbnailIndex);
//
//			return new Item(count + 1, name, folderName, size, initialThumbnail, initialThumbnailIndex, thumbnailNames);
//		} else {
//			return new Item(count + 1, name, folderName, size, null, 0, emptyList());
//		}
//	}
//
//	private String convertToHumanReadableByteCount(final long bytes) {
//
//		final long absB = bytes == Long.MIN_VALUE ? Long.MAX_VALUE : Math.abs(bytes);
//
//		if (absB < 1024) {
//			return bytes + " B";
//		}
//
//		long value = absB;
//		final CharacterIterator ci = new StringCharacterIterator("KMGTPE");
//
//		for (int i = 40; i >= 0 && absB > 0xfffccccccccccccL >> i; i -= 10) {
//			value >>= 10;
//			ci.next();
//		}
//		value *= Long.signum(bytes);
//
//		return String.format("%.2f %cB", value / 1024.0, ci.current())
//			.replace(",", ".")
//			.replace("B", "b");
//	}
//
//	private void validateList(final Validator validator, final List<?> list) {
//		list.stream()
//			.map(item -> validator.validate(item))
//			.filter(violations -> !violations.isEmpty())
//			.findFirst()
//			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });
//	}
//
//	private int determineInitialThumbnailIndex(final List<String> thumbnailNames) {
//		if (thumbnailNames.size() > 0) {
//			return thumbnailNames.stream()
//				.filter(name -> name.contains(INITIAL_THUMBNAIL_POSTFIX))
//				.findFirst()
//				.map(thumbnailNames::indexOf)
//				.orElse(new Random().nextInt(thumbnailNames.size()));
//		}
//		return 0;
//	}
//
//	private byte[] getInitialThumbnailBytes(final String folderName, final String thumbnailFolderName,
//	                                        final List<String> thumbnailNames, final int initialThumbnailIndex) {
//
//		if (thumbnailNames.size() > 0) {
//			final String initialThumbnailName = thumbnailNames.get(initialThumbnailIndex);
//			return loadThumbnailBytes(folderName, thumbnailFolderName, initialThumbnailName);
//		}
//		return null;
//	}
//
//	private byte[] loadThumbnailBytes(final String folderName, final String thumbnailFolderName,
//									  final String thumbnailName) {
//
//		final File file = Paths.get(thumbnailsLocation + "/" + folderName + "/" + thumbnailFolderName)
//			.resolve(thumbnailName)
//			.toFile();
//
//		try {
//			return FileUtils.readFileToByteArray(file);
//		} catch (IOException e) {
//			return null;
//		}
//	}

}
