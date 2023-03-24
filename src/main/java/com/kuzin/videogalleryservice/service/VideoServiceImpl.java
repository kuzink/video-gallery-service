package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.repository.domain.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.support.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;

import java.util.*;

import static com.kuzin.videogalleryservice.util.FileSystemUtil.getResourceRegion;
import static com.kuzin.videogalleryservice.util.HelperUtil.SLASH_SYMBOL;

@Service
public class VideoServiceImpl implements VideoService {

    private final List<VideoEntity> videos;
    private final String videosLocation;

    @Autowired
    public VideoServiceImpl(final List<VideoEntity> videos, @Value("${videos.location}") final String videosLocation) {
        this.videos = videos;
        this.videosLocation = videosLocation;
    }

    @Override
    public ResourceRegion getById(final Integer id, final HttpHeaders headers) {
        final VideoEntity video = videos.stream()
                .filter(it -> it.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Video with id=" + id + " not found"));

        final String path = videosLocation.concat(SLASH_SYMBOL)
                .concat(video.getFolderName()).concat(SLASH_SYMBOL)
                .concat(video.getName());

        return getResourceRegion(path, headers);
    }
}
