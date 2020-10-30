package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.Item;
import com.kuzin.videogalleryservice.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/items")
public class ItemResource {

	private final ItemService itemService;


	@GetMapping
	public List<Item> getItems(@RequestParam(required = false) final String condition) {
		return itemService.getItems();
	}

}
