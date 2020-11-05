package com.kuzin.videogalleryservice.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/videos")
public class VideoResource {

	@Value("${videos.location}")
	private String location;


	@GetMapping("/{name}")
	public ResponseEntity<ResourceRegion> getVideo(@PathVariable final String name,
	                                               @RequestHeader final HttpHeaders headers) throws IOException {

		final UrlResource video = new UrlResource("file:" + location + "/" + name);
		final ResourceRegion region = getResourceRegion(video, headers);

		return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
			.contentType(MediaTypeFactory.getMediaType(video).orElse(MediaType.APPLICATION_OCTET_STREAM))
			.body(region);
	}

	private ResourceRegion getResourceRegion(final UrlResource video, final HttpHeaders headers) throws IOException {
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
