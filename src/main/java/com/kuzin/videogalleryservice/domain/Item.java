package com.kuzin.videogalleryservice.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Item {

	@NotNull
	private Integer id;

	@NotBlank
	private String name;

	@NotBlank
	private String category;

	@NotBlank
	private String size;

	@ToString.Exclude
	private byte[] initialThumbnail;

	private Integer initialThumbnailIndex;

	private List<String> thumbnailNames;
}
