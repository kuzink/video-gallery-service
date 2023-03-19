package com.kuzin.videogalleryservice.util;

import java.util.List;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.IOException;

import static java.util.stream.Collectors.toList;

public class FileSystemUtil {

    public static List<String> getSubFoldersNames(final String folder) {
        try {
            return Files.list(Paths.get(folder))
                .map(Path::toFile)
                .filter(File::isDirectory)
                .map(File::getName)
                .sorted()
                .collect(toList());
        } catch (IOException e) {
            throw new RuntimeException("FileSystemUtil.getSubFoldersNames() threw exception: " + e);
        }
    }

}
