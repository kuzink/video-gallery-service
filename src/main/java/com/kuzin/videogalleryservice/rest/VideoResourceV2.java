package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.core.io.support.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/videos")
@CrossOrigin
@AllArgsConstructor
public class VideoResourceV2 {

	private final VideoService videoService;

	@GetMapping("/{id}")
	public ResponseEntity<ResourceRegion> getById(@PathVariable final int id,
	                                              @RequestHeader final HttpHeaders headers) {
		return videoService.getById(id, headers);
	}
}
