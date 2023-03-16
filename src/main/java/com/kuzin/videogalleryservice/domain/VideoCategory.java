package com.kuzin.videogalleryservice.domain;

import lombok.*;

import javax.validation.constraints.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VideoCategory {

	@NotNull
	private String id;

	@NotBlank
	private String title;
}
