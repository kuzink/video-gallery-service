package com.kuzin.videogalleryservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Person {

	private Integer id;

	@NotNull
	private Integer age;

	@NotBlank
	private String name;
}
