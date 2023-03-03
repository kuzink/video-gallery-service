package com.kuzin.videogalleryservice.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

import static org.springframework.http.HttpStatus.PARTIAL_CONTENT;
import static org.springframework.http.MediaType.APPLICATION_OCTET_STREAM;
import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/api/videos")
public class VideoResource {

	@Value("${videos.location}")
	private String videosLocation;

	@GetMapping("/{name}")
	public ResponseEntity<ResourceRegion> getVideo(@PathVariable final String name,
	                                               @RequestHeader final HttpHeaders headers) throws IOException {

		return status(PARTIAL_CONTENT)
			.contentType(APPLICATION_OCTET_STREAM)
			.body(getResourceRegion(name, headers));
	}

	private ResourceRegion getResourceRegion(final String name, final HttpHeaders headers) throws IOException {

		final UrlResource video = new UrlResource("file:" + videosLocation + "/" + name);
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
	}

}
