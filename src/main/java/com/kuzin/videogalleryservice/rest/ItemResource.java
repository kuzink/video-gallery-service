package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.Item;
import com.kuzin.videogalleryservice.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/items")
public class ItemResource {

	private final ItemService itemService;


	@GetMapping
	public List<Item> findAll(@RequestParam(required = false) final String condition) {
		//TODO: add pagination
		return itemService.findAll();
	}

	@GetMapping("/{id}")
	public Item findById(@PathVariable final Integer id) {
		return itemService.findById(id);
	}

}
