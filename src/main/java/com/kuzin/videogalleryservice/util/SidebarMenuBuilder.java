package com.kuzin.videogalleryservice.util;

import com.kuzin.videogalleryservice.dto.SidebarMenuItemDto;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.stream.Collectors.toList;

public class SidebarMenuBuilder {

    private static final AtomicInteger SIDEBAR_MENU_ITEM_ID_COUNTER = new AtomicInteger();

    public static void buildSidebarMenuItems(final List<SidebarMenuItemDto> sidebarMenu,
                                             final List<String> folderNames) {

        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Navigation")
                .isHead(true)
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Categories")
                .icon("fa-regular fa-layer-group")
                .children(getSidebarMenuItems(folderNames))
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Other")
                .isHead(true)
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Favourites")
                .icon("fa-regular fa-heart")
                .path("/favourites")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Tags")
                .icon("fa-regular fa-tags")
                .path("/tags")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Download")
                .icon("fa-regular fa-download")
                .path("/download")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Settings")
                .icon("fa-regular fa-gear")
                .path("/settings")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Report Bug")
                .icon("fa-regular fa-bug")
                .path("/report-bug")
                .build());
    }

    private static List<SidebarMenuItemDto> getSidebarMenuItems(final List<String> folderNames) {

        final List<SidebarMenuItemDto> result = folderNames.stream()
                .map(it -> SidebarMenuItemDto.builder()
                        .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                        .title(it)
                        .build())
                .collect(toList());

        result.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("All")
                .build());

        return result;
    }
}
