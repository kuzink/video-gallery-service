package com.kuzin.videogalleryservice.service;

import org.springframework.core.io.support.*;
import org.springframework.http.*;

public interface VideoService {

	ResourceRegion getById(Integer id, HttpHeaders headers);
}
