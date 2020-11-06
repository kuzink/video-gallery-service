package com.kuzin.videogalleryservice.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

@RestController
@RequestMapping("/images")
public class ImageResource {

	@Value("${images.location}")
	private String location;


	@GetMapping("/{folder}/{name}")
	public ResponseEntity<byte[]> getImage(@PathVariable final String folder,
	                                       @PathVariable final String name) throws IOException {

		final File file = Paths.get(location + "/" + folder).resolve(name).toFile();
		final byte[] bytes = FileUtils.readFileToByteArray(file);

		return ResponseEntity.status(HttpStatus.OK)
			.contentType(MediaTypeFactory.getMediaType(file.getName()).orElse(MediaType.IMAGE_JPEG))
			.body(bytes);
	}

}
