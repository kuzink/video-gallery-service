package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.repository.domain.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.*;
import org.springframework.core.io.support.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;

import java.util.*;

import static com.kuzin.videogalleryservice.util.HelperUtil.SLASH;

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

		final String path = videosLocation.concat(SLASH)
			.concat(video.getFolderName()).concat(SLASH)
			.concat(video.getName());

		return getResourceRegion(path, headers);
	}

	private ResourceRegion getResourceRegion(final String path, final HttpHeaders headers) {
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
			throw new RuntimeException("VideoServiceImpl.getResourceRegion() threw exception: " + e);
		}

	}
}
