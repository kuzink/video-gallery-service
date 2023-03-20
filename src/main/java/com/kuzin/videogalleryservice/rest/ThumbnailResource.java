package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/thumbnails")
@CrossOrigin
@AllArgsConstructor
public class ThumbnailResource {

    private final ThumbnailService thumbnailService;

    @GetMapping("/{id}/bytes")
    public byte[] getThumbnailBytes(@PathVariable final int id) {
        return thumbnailService.getThumbnailBytes(id);
    }
}
