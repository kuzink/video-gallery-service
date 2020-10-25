package com.kuzin.videogalleryservice.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.List.of;

@RestController
@RequestMapping("/items")
public class ItemResource {

	private static final String ITEM_1 = "item 1";
	private static final String ITEM_2 = "item 2";
	private static final String ITEM_3 = "item 3";
	private static final List<String> ITEMS = of(ITEM_1, ITEM_2, ITEM_3);


	@GetMapping
	public List<String> getOffers(@RequestParam(required = false) final String condition) {
		return ITEMS;
	}
}
