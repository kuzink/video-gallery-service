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
                .title("Category")
                .icon("bx bxs-category")
                .children(getSidebarMenuItems(folderNames))
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Other")
                .isHead(true)
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Cat")
                .icon("bx bxs-cat")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Dog")
                .icon("bx bxs-dog")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Leaf")
                .icon("bx bxs-leaf")
                .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Spa")
                .icon("bx bxs-spa")
                .build());

        sidebarMenu.add(SidebarMenuItemDto.builder()
            .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
            .title("Cat")
            .icon("bx bxs-cat")
            .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
            .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
            .title("Dog")
            .icon("bx bxs-dog")
            .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
            .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
            .title("Leaf")
            .icon("bx bxs-leaf")
            .build());
        sidebarMenu.add(SidebarMenuItemDto.builder()
            .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
            .title("Spa")
            .icon("bx bxs-spa")
            .build());
    }

    private static List<SidebarMenuItemDto> getSidebarMenuItems(final List<String> folderNames) {
        return folderNames.stream()
                .map(it -> SidebarMenuItemDto.builder()
                        .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                        .title(it)
                        .build())
                .collect(toList());
    }
}
