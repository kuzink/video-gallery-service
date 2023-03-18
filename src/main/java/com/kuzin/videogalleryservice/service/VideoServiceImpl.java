package com.kuzin.videogalleryservice.service;

import org.springframework.core.io.support.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;

@Service
public class VideoServiceImpl implements VideoService {

	@Override
	public ResponseEntity<ResourceRegion> getById(final int id, final HttpHeaders headers) {
		return null;
	}
}
