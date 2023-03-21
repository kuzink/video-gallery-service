package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.dto.*;
import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/items")
@CrossOrigin
@AllArgsConstructor
public class ItemResource {

    private final ItemService itemService;

    @GetMapping
    public ItemsResponseDto getItems(@RequestParam(value = "category", defaultValue = "") final String category,
                                     @RequestParam(value = "size", defaultValue = "9") final int size,
                                     @RequestParam(value = "page", defaultValue = "1") final int page,
                                     @RequestParam(value = "sortBy", required = false) final String sortBy,
                                     @RequestParam(value = "search", defaultValue = "") final String search) {
        return itemService.getItems(category, size, page, sortBy, search);
    }
}
