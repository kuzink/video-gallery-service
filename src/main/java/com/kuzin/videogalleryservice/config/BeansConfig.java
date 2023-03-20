package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.dto.SidebarMenuItemDto;
import com.kuzin.videogalleryservice.repository.domain.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;

import javax.validation.Validator;
import java.util.*;

import static com.kuzin.videogalleryservice.repository.StartUpDataInitializr.*;

@Configuration
public class BeansConfig {

    @Value("${videos.location}")
    private String videosLocation;

    @Value("${thumbnails.location}")
    private String thumbnailsLocation;

    @Value("${slides.location}")
    private String slidesLocation;

    @Bean
    public List<String> folderNames() {
        return createFolderNames(videosLocation, thumbnailsLocation, slidesLocation);
    }

    @Bean
    public List<VideoEntity> videos(final List<String> folderNames, final Validator defaultValidator) {
        return createVideos(videosLocation, folderNames, defaultValidator);
    }

    @Bean
    public List<ThumbnailEntity> thumbnails(final List<String> folderNames, final Validator defaultValidator) {
        return createThumbnails(thumbnailsLocation, folderNames, defaultValidator);
    }

    @Bean
    public List<SlideEntity> slides(final List<String> folderNames, final Validator defaultValidator) {
        return createSlides(slidesLocation, folderNames, defaultValidator);
    }

    @Bean
    public List<ItemEntity> items(final List<VideoEntity> videos, final List<ThumbnailEntity> thumbnails,
                                  final Validator defaultValidator) {
        return createItems(thumbnailsLocation, videos, thumbnails, defaultValidator);
    }

    @Bean
    public List<SidebarMenuItemDto> sidebarMenu(final List<String> folderNames, final Validator defaultValidator) {
        return createSidebarMenu(folderNames, defaultValidator);
    }
}
