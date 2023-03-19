package com.kuzin.videogalleryservice.repository;

import java.util.List;

import static com.kuzin.videogalleryservice.util.FileSystemUtil.getSubFoldersNames;
import static com.kuzin.videogalleryservice.validator.StartUpDataValidator.validateFoldersStructure;

public class StartUpDataInitializr {

    public static List<String> createCategories(final String videosLocation,
                                                final String thumbnailsLocation,
                                                final String slidesLocation) {

        final List<String> videos = getSubFoldersNames(videosLocation);
        final List<String> thumbnails = getSubFoldersNames(thumbnailsLocation);
        final List<String> slides = getSubFoldersNames(slidesLocation);

        validateFoldersStructure(videos, thumbnails, slides);

        return videos;
    }
}
