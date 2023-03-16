package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
@AllArgsConstructor
public class SidebarResource {

	private final List<VideoCategory> videoCategories;

	@GetMapping("/video-categories")
	public List<VideoCategory> getVideoCategories() {
		return videoCategories;
	}

}
