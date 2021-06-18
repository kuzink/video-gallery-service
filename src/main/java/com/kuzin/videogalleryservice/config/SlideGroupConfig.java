package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.domain.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.io.*;

import static java.lang.Integer.parseInt;
import static java.util.Comparator.comparingInt;
import static java.util.stream.Collectors.toList;

import java.nio.file.*;
import java.util.*;

@Configuration
public class SlideGroupConfig {

	@Value("${slides.location}")
	private String slidesLocation;

	@Bean
	public List<SlideGroup> slideGroups(final Validator validator) throws IOException {

		final List<SlideGroup> slideGroups = new ArrayList<>();

		final Path path = Paths.get(slidesLocation);
		final List<String> subFolderNames = Files.list(path)
			.map(Path::toFile)
			.filter(File::isDirectory)
			.map(File::getName)
			.sorted(comparingInt(el -> parseInt(el.split("_")[0])))
			.collect(toList());

		for (final String subFolderName : subFolderNames) {

			final Path subFolderPath = Paths.get(slidesLocation).resolve(subFolderName);
			final List<String> slideNames = Files.list(subFolderPath)
				.map(Path::toFile)
				.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
				.map(File::getName)
				.collect(toList());

			slideGroups.add(new SlideGroup(subFolderName, slideNames));
		}

		validateList(validator, slideGroups);

		return slideGroups;
	}

	private void validateList(final Validator validator, final List<SlideGroup> list) {
		list.stream()
			.map(el -> validator.validate(el))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });
	}

}
