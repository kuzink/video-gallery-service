package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.core.io.support.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.PARTIAL_CONTENT;
import static org.springframework.http.MediaType.APPLICATION_OCTET_STREAM;
import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin
@AllArgsConstructor
public class VideoResource {

    private final VideoService videoService;

    @GetMapping("/{id}")
    public ResponseEntity<ResourceRegion> getById(@PathVariable final Integer id,
                                                  @RequestHeader final HttpHeaders headers) {
        return status(PARTIAL_CONTENT)
                .contentType(APPLICATION_OCTET_STREAM)
                .body(videoService.getById(id, headers));
    }
}
