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

	private final String slidesLocation;
	private final List<String> folderNamesInsideSlidesLocation;
	private final List<SlideGroup> slideGroups;

	@Autowired
	public SlideResource(@Value("${slides.location}") final String slidesLocation,
						 final List<String> folderNamesInsideSlidesLocation,
						 final List<SlideGroup> slideGroups) {
		this.slidesLocation = slidesLocation;
		this.folderNamesInsideSlidesLocation = folderNamesInsideSlidesLocation;
		this.slideGroups = slideGroups;
	}

	@GetMapping
	public List<Slide> getSlides() {
		final String randomSlidesFolder = getRandomSlideName(folderNamesInsideSlidesLocation);
		return slideGroups.stream()
			.filter(it -> it.getFolderName().equals(randomSlidesFolder))
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
		return slideGroup.getSubFolderName().split("_")[1];
	}

	private byte[] getSlideBytes(final SlideGroup slideGroup) {

		final String slideName = getRandomSlideName(slideGroup.getSlideNames());
		final Path path = Paths.get(slidesLocation + "/"
				+ slideGroup.getFolderName() + "/"
				+ slideGroup.getSubFolderName()).resolve(slideName);

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
