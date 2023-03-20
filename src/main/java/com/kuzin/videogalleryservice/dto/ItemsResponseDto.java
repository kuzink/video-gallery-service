package com.kuzin.videogalleryservice.dto;

import com.kuzin.videogalleryservice.repository.domain.ItemEntity;
import lombok.*;

import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ItemsResponseDto {

    private List<ItemEntity> items;
    private Page page;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Page {
        private int size;
        private int page;
        private int totalElements;
        private int totalPages;
    }
}
