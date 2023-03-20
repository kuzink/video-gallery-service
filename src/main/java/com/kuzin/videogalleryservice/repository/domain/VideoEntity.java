package com.kuzin.videogalleryservice.repository.domain;

import lombok.*;

import javax.validation.constraints.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VideoEntity {

	@NotNull
	private Integer id;

	@NotBlank
	private String folderName;

	@NotBlank
	private String name;

	@NotBlank
	private String size;
}
