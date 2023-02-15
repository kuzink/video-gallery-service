package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.*;
import com.kuzin.videogalleryservice.dto.PagedItemsResponse;

import static com.kuzin.videogalleryservice.domain.SortCriteria.getComparator;
import static com.kuzin.videogalleryservice.dto.PagedItemsResponse.Page;
import static java.util.stream.Collectors.toList;
import static org.apache.commons.lang3.StringUtils.isNotBlank;

import org.apache.commons.io.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

@RestController
@RequestMapping("/items")
@CrossOrigin
public class ItemResource {

	private final List<Item> items;
	private final String thumbnailsLocation;

	@Autowired
	public ItemResource(final List<Item> items,
	                    @Value("${thumbnails.location}") final String thumbnailsLocation) {
		this.items = items;
		this.thumbnailsLocation = thumbnailsLocation;
	}

	@GetMapping
	public PagedItemsResponse getItems(@RequestParam(value = "size", defaultValue = "9") final int size,
	                                   @RequestParam(value = "page", defaultValue = "1") final int page,
	                                   @RequestParam(value = "sortBy", required = false) final String sortBy,
	                                   @RequestParam(value = "search", defaultValue = "") final String search) {

		if (size <= 0 || page <= 0) {
			throw new RuntimeException("Error: size and page must be greater than 0");
		}

		final List<Item> foundItems = isNotBlank(search) ?
			findItemsBySearchCondition(search) :
			items;

		foundItems.sort(getComparator(sortBy));

		return PagedItemsResponse.builder()
			.page(buildPage(foundItems, size, page))
			.items(buildItems(foundItems, size, page))
			.build();
	}

	@GetMapping("/{itemId}/thumbnails/{thumbnailName}")
	public byte[] getItemThumbnail(@PathVariable final Integer itemId, @PathVariable final String thumbnailName) {
		return loadThumbnailBytes(itemId, thumbnailName);
	}

	private List<Item> findItemsBySearchCondition(final String search) {
		return items.stream()
			.filter(item -> item.getName().toLowerCase().contains(search.toLowerCase()))
			.collect(toList());
	}

	private Page buildPage(final List<Item> foundItems, final int size, final int page) {

		final int totalElements = foundItems.size();
		final int totalPages = totalElements % size == 0 ? totalElements / size : totalElements / size + 1;

		return Page.builder()
			.size(size)
			.page(page)
			.totalElements(totalElements)
			.totalPages(totalPages)
			.build();
	}

	private List<Item> buildItems(final List<Item> foundItems, final int size, final int page) {

		final int startIndex = (page - 1) * size;
		final int endIndex = startIndex + size - 1;

		final List<Integer> indexes = new ArrayList<>();

		for (int i = startIndex; i <= endIndex; i++) {
			indexes.add(i);
		}

		final List<Item> filteredItems = new ArrayList<>();

		for (int i = 0; i < foundItems.size(); i++) {
			if (indexes.contains(i)) {
				filteredItems.add(foundItems.get(i));
			}
		}

		return filteredItems;
	}

	private byte[] loadThumbnailBytes(final Integer itemId, final String thumbnailName) {

		final Optional<String> foundItemName = items.stream()
			.filter(item -> item.getId().equals(itemId))
			.map(Item::getName)
			.findFirst();

		if (foundItemName.isPresent()) {

			final File file = Paths.get(thumbnailsLocation + "/" + foundItemName.get())
				.resolve(thumbnailName)
				.toFile();

			try {
				return FileUtils.readFileToByteArray(file);
			} catch (IOException e) {
				return null;
			}
		}

		return null;
	}

}
