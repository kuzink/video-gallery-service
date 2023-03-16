package com.kuzin.videogalleryservice.domain;

import lombok.*;

import javax.validation.constraints.*;
import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class SlideGroup {

	@NotBlank
	private String folderName;

	@NotBlank
	private String subFolderName;

	@NotEmpty
	private List<String> slideNames;

}
