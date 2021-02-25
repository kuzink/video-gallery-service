package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.Slide;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@AllArgsConstructor
@RequestMapping("/slides")
@CrossOrigin
public class SlideResource {

	private static final int MAXIMUM_SLIDES_COUNT = 10;

	private final List<Slide> slides;

	@GetMapping
	public List<Slide> getSlides() {

		if (slides.size() > MAXIMUM_SLIDES_COUNT) {

			final List<Slide> randomSlides = new ArrayList<>();

			final int minimumIndex = 0;
			final int maximumIndex = slides.size() - 1;

			while (randomSlides.size() != MAXIMUM_SLIDES_COUNT) {

				final Slide randomSlide = slides.get(getRandomNumberInRange(minimumIndex, maximumIndex));

				if (!randomSlides.contains(randomSlide)) {
					randomSlides.add(randomSlide);
				}
			}

			return randomSlides;

		} else {
			return slides;
		}
	}

	private int getRandomNumberInRange(final int min, final int max) {
		return new Random().nextInt((max - min) + 1) + min;
	}

}
