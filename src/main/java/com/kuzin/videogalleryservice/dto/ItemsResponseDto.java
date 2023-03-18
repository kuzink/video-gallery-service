package com.kuzin.videogalleryservice.dto;

import com.kuzin.videogalleryservice.domain.*;
import lombok.*;

import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ItemsResponseDto {

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
