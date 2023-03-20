package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.dto.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.*;

import java.util.*;

@Service
@AllArgsConstructor
public class SidebarServiceImpl implements SidebarService {

    private final List<SidebarMenuItemDto> sidebarMenu;

    @Override
    public List<SidebarMenuItemDto> getSidebarMenu() {
        return sidebarMenu;
    }
}
