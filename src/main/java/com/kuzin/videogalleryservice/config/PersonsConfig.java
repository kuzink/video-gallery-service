package com.kuzin.videogalleryservice.config;

import com.kuzin.videogalleryservice.domain.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class PersonsConfig {

	@Bean
	public List<Person> persons() {

		final List<Person> persons = new ArrayList<>();

		persons.add(Person.builder()
			.id(1)
			.age(21)
			.name("Kristina")
			.build());
		persons.add(Person.builder()
			.id(2)
			.age(22)
			.name("Margarita")
			.build());
		persons.add(Person.builder()
			.id(3)
			.age(23)
			.name("Alina")
			.build());

		return persons;
	}
}
