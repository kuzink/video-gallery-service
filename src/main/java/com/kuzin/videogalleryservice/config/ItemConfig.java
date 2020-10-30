package com.kuzin.videogalleryservice.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kuzin.videogalleryservice.domain.Item;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class ItemConfig {

	@Bean
	public List<Item> itemsMappingConfig(@Value("classpath:item.json") final InputStream src,
	                                     final ObjectMapper objectMapper,
	                                     final Validator defaultValidator) throws IOException {

		final List<Item> items = objectMapper.readValue(src, new TypeReference<>() {});

		validateList(defaultValidator, items);

		return items;
	}

	private <T> void validateList(final Validator defaultValidator, final List<T> list) {
		list.stream()
			.map(item -> defaultValidator.validate(item))
			.filter(violations -> !violations.isEmpty())
			.findFirst()
			.ifPresent(violations -> { throw new ConstraintViolationException(violations); });

		//TODO: maybe add validation for unique id, name
	}

}
