package com.kuzin.videogalleryservice.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

	@NotNull
	private Integer id;

	@NotBlank
	private String name;

	private String imageName;

}
