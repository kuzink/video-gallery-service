package com.kuzin.videogalleryservice.validator;

import java.util.List;

public class StartUpDataValidator {

    public static void validateFoldersStructure(final List<String> videos,
                                                final List<String> thumbnails,
                                                final List<String> slides) {

        if (videos.size() == 0 || !videos.equals(thumbnails) || !videos.equals(slides)) {
            throw new RuntimeException("Folders structure is incorrect");
        }
    }
}
