package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.domain.Item;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.NoSuchElementException;

@Component
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {

	private final List<Item> itemsMappingConfig;

	@Override
	public List<Item> findAll() {
		return itemsMappingConfig;
	}

	@Override
	public Item findById(final Integer id) {
		//playRussianRoulette();
		return itemsMappingConfig.stream()
			.filter(item -> id.equals(item.getId()))
			.findAny()
			.orElseThrow(() -> new NoSuchElementException("Item with Id: " + id + "not found"));
	}

	private void playRussianRoulette() {
		if (getRandomNumber(1, 5) == 5) throw new NoSuchElementException("Item not found");
	}

	private int getRandomNumber(final int min, final int max) {
		return (int)(Math.random() * ((max - min) + 1)) + min;
	}

}
