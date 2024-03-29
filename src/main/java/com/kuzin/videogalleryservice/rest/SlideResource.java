package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.dto.*;
import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/slides")
@CrossOrigin
@AllArgsConstructor
public class SlideResource {

    private final SlideService slideService;

    @GetMapping
    public List<SlideDto> getSlides() {
        return slideService.getSlides();
    }
}
