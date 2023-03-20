package com.kuzin.videogalleryservice.repository.domain;

import lombok.*;

import javax.validation.constraints.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ThumbnailEntity {

	@NotNull
	private Integer id;

	@NotBlank
	private String folderName;

	@NotBlank
	private String subFolderName;

	@NotBlank
	private String name;
}
