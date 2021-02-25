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
			.text(getSlideText(count + 1))
			.bytes(loadSlideAsByteArray(slideNameWithExtension))
			.build();
	}

	private String getSlideText(final int slideNumber) {

//		final Map<Integer, String> textMap = Map.of(
//			1, "Lorem ipsum dolor sit amet consectetur adipisicing id impedit",
//			2, "Ad enim necessitatibus nulla porro possimus ullam quibusdam saepe",
//			3, "Architecto ipsa mollitia nemo reprehenderit repudiandae tenetur",
//			4, "At ex itaque optio saepe tempora velit facere labore eius",
//			5, "Accusamus eius ex id impedit sit velit mollitia quasi quis",
//			6, "Aut consequuntur libero expedita facere labore suscipit vel",
//			7, "Exercitationem in labore optio saepe commodi deserunt ea eos",
//			8, "Accusantium minima quod ipsum libero praesentium quas",
//			9, "Esse porro quibusdam saepe sed itaque soluta velit tenetur",
//			10, "Aliquid cumque harum mollitia quasi libero quis tenetur tempora"
//		);

		final Map<Integer, String> textMap = Map.of(
			1, "Первый слайд - ",
			2, "Второй слайд - ",
			3, "Третий слайд - ",
			4, "Четвертый слайд - ",
			5, "Пятый слайд - ",
			6, "Шестой слайд - ",
			7, "Седьмой слайд - ",
			8, "Восьмой слайд - ",
			9, "Девятый слайд - ",
			10, "Десятый слайд - "
		);

		if (slideNumber <= textMap.size()) {
			return textMap.get(slideNumber);
		} else {
			return textMap.get(1);
		}
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
