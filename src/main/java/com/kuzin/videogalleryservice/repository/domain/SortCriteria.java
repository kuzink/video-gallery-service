package com.kuzin.videogalleryservice.repository.domain;

import lombok.*;

import java.util.*;

import static java.lang.Double.compare;
import static java.lang.Double.parseDouble;
import static java.util.Arrays.stream;
import static java.util.Comparator.comparing;

@AllArgsConstructor
public enum SortCriteria {

    ID_UP("idUp", comparing(ItemEntity::getId)),
    NAME_UP("nameUp", comparing(ItemEntity::getName)),
    NAME_DOWN("nameDown", comparing(ItemEntity::getName).reversed()),
    SIZE_UP("sizeUp", comparing(item -> parseDouble(item.getSize().split(" ")[0]))),
    SIZE_DOWN("sizeDown", (a, b) -> compare(parseDouble(b.getSize().split(" ")[0]), parseDouble(a.getSize().split(" ")[0])));

    private String criteria;
    private Comparator<ItemEntity> comparator;

    public static Comparator<ItemEntity> getComparator(final String criteria) {
        return stream(SortCriteria.values())
                .filter(el -> el.criteria.equalsIgnoreCase(criteria))
                .findFirst()
                .map(el -> el.comparator)
                .orElse(ID_UP.comparator);
    }
}
