package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.domain.Slide;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import static java.lang.String.format;
import static java.util.stream.Collectors.toList;

@Configuration
public class SlidesConfig {

	@Value("${slides.location}")
	private String slidesLocation;

	@Bean
	public List<Slide> slides(final Validator defaultValidator) throws IOException {

		final List<File> allSlideFiles = getJPGFilesFromSlidesLocation();
		final List<Slide> slides = new ArrayList<>();

		for (int i = 0; i < allSlideFiles.size(); i++) {
			slides.add(createSlide(i, allSlideFiles.get(i).getName()));
		}

		validateList(defaultValidator, slides);

		return slides;
	}

	private List<File> getJPGFilesFromSlidesLocation() throws IOException {
		return Files.list(Paths.get(slidesLocation))
			.map(Path::toFile)
			.filter(it -> it.getName().substring(it.getName().length() - 4).equals(".jpg"))
			.collect(toList());
	}

	private Slide createSlide(final int count, final String slideNameWithExtension) {
		return Slide.builder()
			.id(count + 1)
			.text(format("Slide %d text", count + 1))
			.bytes(loadSlideAsByteArray(slideNameWithExtension))
			.build();
	}

	private byte[] loadSlideAsByteArray(final String slideNameWithExtension) {
		final File file = Paths.get(slidesLocation).resolve(slideNameWithExtension).toFile();
		try {
			return FileUtils.readFileToByteArray(file);
		} catch (IOException e) {
			return null;
		}
	}

	private <T> void validateList(final Validator defaultValidator, final List<T> list) {
		list.stream()
			.map(item -> defaultValidator.validate(item))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });
	}

}
