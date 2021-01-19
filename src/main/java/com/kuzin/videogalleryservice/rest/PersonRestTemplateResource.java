package com.kuzin.videogalleryservice.rest;

import static java.util.Arrays.asList;
import static java.util.Objects.requireNonNull;

import com.kuzin.videogalleryservice.domain.Person;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestOperations;

import java.util.List;
import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/resttemplate/persons")
public class PersonRestTemplateResource {

	private static final String BASE_URL = "http://localhost:8080/persons";

	private final RestOperations restOperations;

	@GetMapping
	public List<Person> getAll() {
		return asList(requireNonNull(restOperations.getForObject(BASE_URL, Person[].class)));
	}

	@GetMapping("/{id}")
	public Person getPerson(@PathVariable Integer id) {
		return restOperations.getForObject(BASE_URL + "/" + id, Person.class);
	}

	@PostMapping
	public Person createPerson(@Valid @RequestBody Person newPerson) {
		return restOperations.postForObject(BASE_URL, newPerson, Person.class);
	}

	@PatchMapping("/{id}")
	public Person updatePerson(@PathVariable Integer id, @Valid @RequestBody Person personToUpdate) {
		return restOperations.patchForObject(BASE_URL + "/" + id, personToUpdate, Person.class);

	}

	@DeleteMapping("/{id}")
	public void deletePerson(@PathVariable Integer id) {
		restOperations.delete(BASE_URL + "/" + id);
	}

}
