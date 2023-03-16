package com.kuzin.videogalleryservice.domain;

import lombok.*;

import java.util.*;

import static java.lang.Double.compare;
import static java.lang.Double.parseDouble;
import static java.util.Arrays.stream;
import static java.util.Comparator.comparing;

@AllArgsConstructor
public enum SortCriteria {

	ID_UP("idUp", comparing(Item::getId)),
	NAME_UP("nameUp", comparing(Item::getName)),
	NAME_DOWN("nameDown", comparing(Item::getName).reversed()),
	SIZE_UP("sizeUp", comparing(item -> parseDouble(item.getSize().split(" ")[0]))),
	SIZE_DOWN("sizeDown", (a, b) -> compare(parseDouble(b.getSize().split(" ")[0]), parseDouble(a.getSize().split(" ")[0])));

	private String criteria;
	private Comparator<Item> comparator;

	public static Comparator<Item> getComparator(final String criteria) {
		return stream(SortCriteria.values())
			.filter(el -> el.criteria.equalsIgnoreCase(criteria))
			.findFirst()
			.map(el -> el.comparator)
			.orElse(ID_UP.comparator);
	}
}
