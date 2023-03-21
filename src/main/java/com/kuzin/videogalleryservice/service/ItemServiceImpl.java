package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.dto.*;
import com.kuzin.videogalleryservice.repository.domain.ItemEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.*;

import java.util.ArrayList;
import java.util.List;

import static com.kuzin.videogalleryservice.repository.domain.SortCriteria.getComparator;
import static java.util.stream.Collectors.toList;
import static org.apache.commons.lang3.StringUtils.isNotBlank;

@Service
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final List<ItemEntity> items;

    @Override
    public ItemsResponseDto getItems(final String category, final int size, final int page, final String sortBy,
                                     final String search) {

        if (size <= 0 || page <= 0) {
            throw new RuntimeException("Error: size and page must be greater than 0");
        }

        final List<ItemEntity> foundItems = isNotBlank(search) ?
            findItemsBySearchCondition(search) :
            items;

        final List<ItemEntity> foundItemsByCategory = isNotBlank(category) ?
            findItemsByCategory(foundItems, category) :
            foundItems;

        foundItemsByCategory.sort(getComparator(sortBy));

        return ItemsResponseDto.builder()
                .page(buildPage(foundItemsByCategory, size, page))
                .items(buildItems(foundItemsByCategory, size, page))
                .build();
    }

    private List<ItemEntity> findItemsBySearchCondition(final String search) {
        return items.stream()
                .filter(item -> item.getName().toLowerCase().contains(search.toLowerCase()))
                .collect(toList());
    }

    private List<ItemEntity> findItemsByCategory(List<ItemEntity> foundItems, final String category) {
        return foundItems.stream()
            .filter(item -> item.getCategory().equals(category))
            .collect(toList());
    }

    private ItemsResponseDto.Page buildPage(final List<ItemEntity> foundItems, final int size, final int page) {

        final int totalElements = foundItems.size();
        final int totalPages = totalElements % size == 0 ? totalElements / size : totalElements / size + 1;

        return ItemsResponseDto.Page.builder()
                .size(size)
                .page(page)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .build();
    }

    private List<ItemEntity> buildItems(final List<ItemEntity> foundItems, final int size, final int page) {

        final int startIndex = (page - 1) * size;
        final int endIndex = startIndex + size - 1;

        final List<Integer> indexes = new ArrayList<>();

        for (int i = startIndex; i <= endIndex; i++) {
            indexes.add(i);
        }

        final List<ItemEntity> filteredItems = new ArrayList<>();

        for (int i = 0; i < foundItems.size(); i++) {
            if (indexes.contains(i)) {
                filteredItems.add(foundItems.get(i));
            }
        }

        return filteredItems;
    }
}
