package com.kuzin.videogalleryservice.service;

import org.springframework.core.io.support.*;
import org.springframework.http.*;

public interface VideoService {

	ResponseEntity<ResourceRegion> getById(int id, HttpHeaders headers);
}
