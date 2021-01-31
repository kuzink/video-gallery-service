package com.kuzin.videogalleryservice.dto;

import com.kuzin.videogalleryservice.domain.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PagedItemsResponse {

	private List<Item> items;
	private Page page;

	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Page {
		private int size;
		private int page;
		private int totalElements;
		private int totalPages;
	}
}
