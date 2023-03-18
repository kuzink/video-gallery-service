package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.dto.*;
import org.springframework.stereotype.*;

@Service
public class ItemServiceImpl implements ItemService {

	@Override
	public ItemsResponseDto getItems(final int size, final int page, final String sortBy, final String search) {
		return null;
	}
}
