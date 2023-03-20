package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/thumbnails")
@CrossOrigin
@AllArgsConstructor
public class ThumbnailResourceV2 {

	private final ThumbnailService thumbnailService;

	@GetMapping("/{id}/bytes")
	public byte[] getById(@PathVariable final int id) {
		return thumbnailService.getById(id);
	}
}
