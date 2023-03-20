package com.kuzin.videogalleryservice.util;

import java.util.List;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRange;

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

    public static byte[] loadFileBytes(final String path) {
        final File file = Paths.get(path).toFile();
        try {
            return FileUtils.readFileToByteArray(file);
        } catch (IOException e) {
            return null;
        }
    }

    public static ResourceRegion getResourceRegion(final String path, final HttpHeaders headers) {
        try {
            final UrlResource video = new UrlResource("file:" + path);
            final long contentLength = video.contentLength();

            if (headers.getRange().size() > 0) {
                final HttpRange range = headers.getRange().get(0);
                final long start = range.getRangeStart(contentLength);
                final long end = range.getRangeEnd(contentLength);
                final long rangeLength = Long.min(1000000L, end - start + 1);

                return new ResourceRegion(video, start, rangeLength);
            } else {
                final long rangeLength = Long.min(1000000L, contentLength);

                return new ResourceRegion(video, 0, rangeLength);
            }
        } catch (Exception e) {
            throw new RuntimeException("FileSystemUtil.getResourceRegion() threw exception: " + e);
        }
    }
}
