package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.Item;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/items")
public class ItemResource {

	private final List<Item> itemsMappingConfig;

	@GetMapping
	public List<Item> findAll() {
		return itemsMappingConfig;
	}

}
