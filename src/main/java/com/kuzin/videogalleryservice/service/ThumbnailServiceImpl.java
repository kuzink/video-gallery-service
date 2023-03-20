package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.repository.domain.ThumbnailEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.*;

import java.util.List;

import static com.kuzin.videogalleryservice.util.FileSystemUtil.loadFileBytes;
import static com.kuzin.videogalleryservice.util.HelperUtil.SLASH;

@Service
public class ThumbnailServiceImpl implements ThumbnailService {

    private final List<ThumbnailEntity> thumbnails;
    private final String thumbnailsLocation;

    @Autowired
    public ThumbnailServiceImpl(final List<ThumbnailEntity> thumbnails,
                                @Value("${thumbnails.location}") final String thumbnailsLocation) {
        this.thumbnails = thumbnails;
        this.thumbnailsLocation = thumbnailsLocation;
    }

    @Override
    public byte[] getThumbnailBytes(final int id) {
        final ThumbnailEntity thumbnail = thumbnails.stream()
                .filter(it -> it.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Thumbnail with id=" + id + " not found"));

        final String path = thumbnailsLocation.concat(SLASH)
                .concat(thumbnail.getFolderName()).concat(SLASH)
                .concat(thumbnail.getSubFolderName()).concat(SLASH)
                .concat(thumbnail.getName());

        return loadFileBytes(path);
    }
}
