package com.kuzin.videogalleryservice.validator;

import javax.validation.*;
import java.util.List;

public class StartUpDataValidator {

	public static void validateFoldersStructure(final List<String> videosFolderNames,
	                                            final List<String> thumbnailsFolderNames,
	                                            final List<String> slidesFolderNames) {

		if (videosFolderNames.size() == 0 || !videosFolderNames.equals(thumbnailsFolderNames)
			|| !videosFolderNames.equals(slidesFolderNames)) {
			throw new RuntimeException("Folders structure is incorrect");
		}
	}

	public static void validateList(final Validator validator, final List<?> list) {
		list.stream()
			.map(item -> validator.validate(item))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> {
				throw new ConstraintViolationException(violations);
			});
	}

}
