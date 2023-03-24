package com.kuzin.videogalleryservice.repository;

import com.kuzin.videogalleryservice.dto.SidebarMenuItemDto;
import com.kuzin.videogalleryservice.repository.domain.*;

import javax.validation.*;
import java.io.*;
import java.util.*;
import java.util.concurrent.atomic.*;
import java.util.stream.*;

import static com.kuzin.videogalleryservice.util.FileSystemUtil.*;
import static com.kuzin.videogalleryservice.util.HelperUtil.INITIAL_THUMBNAIL_POSTFIX;
import static com.kuzin.videogalleryservice.util.HelperUtil.SLASH_SYMBOL;
import static com.kuzin.videogalleryservice.util.HelperUtil.convertToHumanReadableSize;
import static com.kuzin.videogalleryservice.util.HelperUtil.removeFileExtension;
import static com.kuzin.videogalleryservice.util.SidebarMenuBuilder.buildSidebarMenuItems;
import static com.kuzin.videogalleryservice.validator.StartUpDataValidator.validateFoldersStructure;
import static com.kuzin.videogalleryservice.validator.StartUpDataValidator.validateList;

public class StartUpDataInitializr {

    private static final AtomicInteger VIDEO_ID_COUNTER = new AtomicInteger();
    private static final AtomicInteger THUMBNAIL_ID_COUNTER = new AtomicInteger();
    private static final AtomicInteger SLIDE_ID_COUNTER = new AtomicInteger();

    public static List<String> createFolderNames(final String videosLocation,
                                                 final String thumbnailsLocation,
                                                 final String slidesLocation) {

        final List<String> videosFolderNames = getFolderNames(videosLocation);
        final List<String> thumbnailsFolderNames = getFolderNames(thumbnailsLocation);
        final List<String> slidesFolderNames = getFolderNames(slidesLocation);

        validateFoldersStructure(videosFolderNames, thumbnailsFolderNames, slidesFolderNames);

        return videosFolderNames;
    }

    public static List<VideoEntity> createVideos(final String videosLocation, final List<String> folderNames,
                                                 final Validator defaultValidator) {

        final List<VideoEntity> videos = new ArrayList<>();

        folderNames.forEach(folderName -> {
            final String path = videosLocation.concat(SLASH_SYMBOL).concat(folderName);
            final List<File> videoFiles = getVideoFiles(path);

            videoFiles.forEach(videoFile -> {
                final Integer id = VIDEO_ID_COUNTER.incrementAndGet();
                final String name = videoFile.getName();
                final String size = convertToHumanReadableSize(videoFile.length());

                videos.add(VideoEntity.builder()
                        .id(id)
                        .folderName(folderName)
                        .name(name)
                        .size(size)
                        .build());
            });
        });

        validateList(defaultValidator, videos);

        return videos;
    }

    public static List<ThumbnailEntity> createThumbnails(final String thumbnailsLocation,
                                                         final List<String> folderNames,
                                                         final Validator defaultValidator) {

        final List<ThumbnailEntity> thumbnails = new ArrayList<>();

        folderNames.forEach(folderName -> {
            final String path = thumbnailsLocation.concat(SLASH_SYMBOL).concat(folderName);
            final List<String> subFolderNames = getFolderNames(path);

            subFolderNames.forEach(subFolderName -> {
                final String subPath = path.concat(SLASH_SYMBOL).concat(subFolderName);
                final List<File> thumbnailFiles = getThumbnailFiles(subPath);

                thumbnailFiles.forEach(thumbnailFile -> {
                    final Integer id = THUMBNAIL_ID_COUNTER.incrementAndGet();
                    final String name = thumbnailFile.getName();

                    thumbnails.add(ThumbnailEntity.builder()
                            .id(id)
                            .folderName(folderName)
                            .subFolderName(subFolderName)
                            .name(name)
                            .build());
                });
            });
        });

        validateList(defaultValidator, thumbnails);

        return thumbnails;
    }

    public static List<SlideEntity> createSlides(final String slidesLocation, final List<String> folderNames,
                                                 final Validator defaultValidator) {

        final List<SlideEntity> slides = new ArrayList<>();

        folderNames.forEach(folderName -> {
            final String path = slidesLocation.concat(SLASH_SYMBOL).concat(folderName);
            final List<String> subFolderNames = getFolderNames(path);

            subFolderNames.forEach(subFolderName -> {
                final String subPath = path.concat(SLASH_SYMBOL).concat(subFolderName);
                final List<File> thumbnailFiles = getThumbnailFiles(subPath);

                thumbnailFiles.forEach(thumbnailFile -> {
                    final Integer id = SLIDE_ID_COUNTER.incrementAndGet();
                    final String name = thumbnailFile.getName();

                    slides.add(SlideEntity.builder()
                            .id(id)
                            .folderName(folderName)
                            .subFolderName(subFolderName)
                            .name(name)
                            .build());
                });
            });
        });

        validateList(defaultValidator, slides);

        return slides;
    }

    public static List<ItemEntity> createItems(final String thumbnailsLocation, final List<VideoEntity> videos,
                                               final List<ThumbnailEntity> thumbnails,
                                               final Validator defaultValidator) {

        final List<ItemEntity> items = new ArrayList<>();

        videos.forEach(video -> {
            final String name = removeFileExtension(video.getName(), true);

            final List<ThumbnailEntity> thumbnailsForThisVideo = thumbnails.stream()
                    .filter(it -> it.getFolderName().equals(video.getFolderName()) && it.getSubFolderName().equals(name))
                    .collect(Collectors.toList());

            final Integer initialThumbnailId = getInitialThumbnailId(thumbnailsForThisVideo);
            final byte[] initialThumbnailBytes =
                    getInitialThumbnailBytes(thumbnailsLocation, thumbnailsForThisVideo, initialThumbnailId);

            final List<Integer> thumbnailIds = thumbnailsForThisVideo.stream()
                    .map(ThumbnailEntity::getId)
                    .collect(Collectors.toList());

            items.add(ItemEntity.builder()
                    .id(video.getId())
                    .category(video.getFolderName())
                    .name(name)
                    .size(video.getSize())
                    .initialThumbnailId(initialThumbnailId)
                    .initialThumbnailBytes(initialThumbnailBytes)
                    .thumbnailIds(thumbnailIds)
                    .build());
        });

        validateList(defaultValidator, items);

        return items;
    }

    public static List<SidebarMenuItemDto> createSidebarMenu(final List<String> folderNames,
                                                             final Validator defaultValidator) {

        final List<SidebarMenuItemDto> sidebarMenu = new ArrayList<>();

        buildSidebarMenuItems(sidebarMenu, folderNames);

        validateList(defaultValidator, sidebarMenu);

        return sidebarMenu;
    }

    private static Integer getInitialThumbnailId(final List<ThumbnailEntity> thumbnails) {
        if (thumbnails.size() > 0) {
            return thumbnails.stream()
                    .filter(it -> it.getName().contains(INITIAL_THUMBNAIL_POSTFIX))
                    .findFirst()
                    .map(ThumbnailEntity::getId)
                    .orElse(thumbnails.get(new Random().nextInt(thumbnails.size())).getId());
        }
        return null;
    }

    private static byte[] getInitialThumbnailBytes(final String thumbnailsLocation,
                                                   final List<ThumbnailEntity> thumbnails,
                                                   final Integer initialThumbnailId) {
        if (thumbnails.size() > 0) {
            final ThumbnailEntity thumbnail = thumbnails.stream()
                    .filter(it -> it.getId().equals(initialThumbnailId))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("StartUpDataInitializr.getInitialThumbnailBytes exception"));

            final String path = thumbnailsLocation.concat(SLASH_SYMBOL)
                    .concat(thumbnail.getFolderName()).concat(SLASH_SYMBOL)
                    .concat(thumbnail.getSubFolderName()).concat(SLASH_SYMBOL)
                    .concat(thumbnail.getName());

            return loadFileBytes(path);
        }
        return null;
    }
}
