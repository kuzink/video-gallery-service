package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.*;
import com.kuzin.videogalleryservice.dto.PagedItemsResponse;

import static com.kuzin.videogalleryservice.domain.SortCriteria.getComparator;
import static com.kuzin.videogalleryservice.dto.PagedItemsResponse.Page;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@AllArgsConstructor
@RequestMapping("/items")
@CrossOrigin
public class ItemResource {

	private final List<Item> items;

	@GetMapping
	public PagedItemsResponse getItems(@RequestParam(value = "size", defaultValue = "9") int size,
	                                   @RequestParam(value = "page", defaultValue = "1") int page,
	                                   @RequestParam(value = "sortBy", required = false) String criteria) {

		if (size <= 0 || page <= 0) {
			throw new RuntimeException("Error: size and page must be greater than 0");
		}

		items.sort(getComparator(criteria));

		return PagedItemsResponse.builder()
			.page(buildPage(size, page))
			.items(buildItems(size, page))
			.build();
	}

	private Page buildPage(final int size, final int page) {

		final int totalElements = items.size();
		final int totalPages = totalElements % size == 0 ? totalElements / size : totalElements / size + 1;

		return Page.builder()
			.size(size)
			.page(page)
			.totalElements(totalElements)
			.totalPages(totalPages)
			.build();
	}

	private List<Item> buildItems(final int size, final int page) {

		final int startIndex = (page - 1) * size;
		final int endIndex = startIndex + size - 1;

		final List<Integer> indexes = new ArrayList<>();

		for (int i = startIndex; i <= endIndex; i++) {
			indexes.add(i);
		}

		final List<Item> filteredItems = new ArrayList<>();

		for (int i = 0; i < items.size(); i++) {
			if (indexes.contains(i)) {
				filteredItems.add(items.get(i));
			}
		}

		return filteredItems;
	}

}
