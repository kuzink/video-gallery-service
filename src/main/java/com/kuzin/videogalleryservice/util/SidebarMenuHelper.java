package com.kuzin.videogalleryservice.util;

import com.kuzin.videogalleryservice.dto.SidebarMenuItemDto;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.stream.Collectors.toList;

public class SidebarMenuHelper {

    private static final AtomicInteger SIDEBAR_MENU_ITEM_ID_COUNTER = new AtomicInteger();

    public static void createSidebarMenuItems(final List<SidebarMenuItemDto> sidebarMenu,
                                              final List<String> folderNames) {

        final SidebarMenuItemDto navigation = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Navigation")
                .isHead(true)
                .build();
        final SidebarMenuItemDto category = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Category")
                .icon("bx bxs-category")
                .children(getSidebarMenuItems(folderNames))
                .build();
        final SidebarMenuItemDto other = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Other")
                .isHead(true)
                .build();
        final SidebarMenuItemDto cat = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Cat")
                .icon("bx bxs-cat")
                .build();
        final SidebarMenuItemDto dog = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Dog")
                .icon("bx bxs-dog")
                .build();
        final SidebarMenuItemDto leaf = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Leaf")
                .icon("bx bxs-leaf")
                .build();
        final SidebarMenuItemDto spa = SidebarMenuItemDto.builder()
                .id(SIDEBAR_MENU_ITEM_ID_COUNTER.incrementAndGet())
                .title("Spa")
                .icon("bx bxs-spa")
                .build();

        sidebarMenu.add(navigation);
        sidebarMenu.add(category);
        sidebarMenu.add(other);
        sidebarMenu.add(cat);
        sidebarMenu.add(dog);
        sidebarMenu.add(leaf);
        sidebarMenu.add(spa);
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
