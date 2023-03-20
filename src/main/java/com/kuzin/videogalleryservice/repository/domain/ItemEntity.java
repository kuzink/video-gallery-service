package com.kuzin.videogalleryservice.repository.domain;

import lombok.*;

import javax.validation.constraints.*;
import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ItemEntity {

	@NotNull
	private Integer id;

	@NotBlank
	private String category;

	@NotBlank
	private String name;

	@NotBlank
	private String size;

	private List<Integer> thumbnailIds;

	private Integer initialThumbnailId;

	@ToString.Exclude
	private byte[] initialThumbnailBytes;
}
