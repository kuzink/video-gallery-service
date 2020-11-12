package com.kuzin.videogalleryservice.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

	@NotNull
	private Integer id;

	@NotBlank
	private String name;

	private List<byte[]> images;

}
