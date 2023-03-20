package com.kuzin.videogalleryservice.util;

import java.util.List;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import static java.util.stream.Collectors.toList;

public class FileSystemUtil {

	private static final List<String> SUPPORTED_VIDEO_FORMATS = List.of(".mp4", ".avi", ".flv", ".mkv", ".wmv");
	private static final List<String> SUPPORTED_THUMBNAIL_FORMATS = List.of(".jpg");

	public static List<String> getFolderNames(final String path) {
		try {
			return Files.list(Paths.get(path))
				.map(Path::toFile)
				.filter(File::isDirectory)
				.map(File::getName)
				.sorted()
				.collect(toList());
		} catch (IOException e) {
			throw new RuntimeException("FileSystemUtil.getFolderNames() threw exception: " + e);
		}
	}

	public static List<File> getVideoFiles(final String path) {
		try {
			return Files.list(Paths.get(path))
				.map(Path::toFile)
				.filter(it -> SUPPORTED_VIDEO_FORMATS.contains(it.getName().substring(it.getName().length() - 4)))
				.collect(toList());
		} catch (IOException e) {
			throw new RuntimeException("FileSystemUtil.getVideoFiles() threw exception: " + e);
		}
	}

	public static List<File> getThumbnailFiles(final String path) {
		try {
			return Files.list(Paths.get(path))
				.map(Path::toFile)
				.filter(it -> SUPPORTED_THUMBNAIL_FORMATS.contains(it.getName().substring(it.getName().length() - 4)))
				.collect(toList());
		} catch (IOException e) {
			throw new RuntimeException("FileSystemUtil.getThumbnailFiles() threw exception: " + e);
		}
	}

	public static byte[] loadThumbnailBytes(final String path) {
		final File file = Paths.get(path).toFile();
		try {
			return FileUtils.readFileToByteArray(file);
		} catch (IOException e) {
			return null;
		}
	}
}
