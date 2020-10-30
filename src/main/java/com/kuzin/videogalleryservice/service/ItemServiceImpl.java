package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.domain.Item;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {


	private final List<Item> itemsMappingConfig;


	@Override
	public List<Item> getItems() {
		return itemsMappingConfig;
	}

}
