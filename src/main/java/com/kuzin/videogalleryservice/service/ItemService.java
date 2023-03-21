package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.dto.*;

public interface ItemService {

	ItemsResponseDto getItems(String category, int size, int page, String sortBy, String search);
}
