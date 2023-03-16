package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class SidebarResource {

	@GetMapping("/video-categories")
	public List<VideoCategory> getVideoCategories() {
		List<VideoCategory> videoCategories = new ArrayList<>();

		videoCategories.add(VideoCategory.builder().id("3").title("Blacked").build());
		videoCategories.add(VideoCategory.builder().id("4").title("Main").build());
		videoCategories.add(VideoCategory.builder().id("5").title("3d").build());

		return videoCategories;
	}

}
