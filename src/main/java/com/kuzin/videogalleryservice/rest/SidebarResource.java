package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.dto.*;
import com.kuzin.videogalleryservice.service.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v2/sidebar-menu")
@CrossOrigin
@AllArgsConstructor
public class SidebarResource {

    private final SidebarService sidebarService;

    @GetMapping
    public List<SidebarMenuItemDto> getSidebarMenu() {
        return sidebarService.getSidebarMenu();
    }
}
