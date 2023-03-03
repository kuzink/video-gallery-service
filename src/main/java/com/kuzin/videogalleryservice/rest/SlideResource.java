package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.*;
import org.apache.commons.io.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.*;
import java.nio.file.*;
import java.util.List;
import java.util.Random;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping("/api/slides")
@CrossOrigin
public class SlideResource {

	private String slidesLocation;
	private List<SlideGroup> slideGroups;

	@Autowired
	public SlideResource(@Value("${slides.location}") String slidesLocation, List<SlideGroup> slideGroups) {
		this.slidesLocation = slidesLocation;
		this.slideGroups = slideGroups;
	}

	@GetMapping
	public List<Slide> getSlides() {
		return slideGroups.stream()
			.map(this::toSlide)
			.collect(toList());
	}

	private Slide toSlide(final SlideGroup slideGroup) {
		return Slide.builder()
			.text(getSlideText(slideGroup))
			.bytes(getSlideBytes(slideGroup))
			.build();
	}

	private String getSlideText(final SlideGroup slideGroup) {
		return slideGroup.getName().split("_")[1];
	}

	private byte[] getSlideBytes(final SlideGroup slideGroup) {

		final String slideName = getRandomSlideName(slideGroup.getSlideNames());
		final Path path = Paths.get(slidesLocation + "/" + slideGroup.getName())
			.resolve(slideName);

		try {
			return FileUtils.readFileToByteArray(path.toFile());
		} catch (IOException e) {
			return null;
		}
	}

	private String getRandomSlideName(final List<String> slideNames) {
		return slideNames.get(new Random().nextInt(slideNames.size()));
	}

}
