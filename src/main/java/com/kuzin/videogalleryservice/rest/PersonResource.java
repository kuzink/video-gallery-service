package com.kuzin.videogalleryservice.rest;

import com.kuzin.videogalleryservice.domain.Person;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@AllArgsConstructor
@RequestMapping("/persons")
public class PersonResource {

	private final List<Person> persons;

	@GetMapping
	public List<Person> getAll() {
		return persons;
	}

	@GetMapping("/{id}")
	public Person getPerson(@PathVariable Integer id) {
		return findPerson(id);
	}

	@PostMapping
	public Person createPerson(@Valid @RequestBody Person newPerson) {
		newPerson.setId(generateNewId());
		persons.add(newPerson);
		return newPerson;
	}

	@PatchMapping("/{id}")
	public Person updatePerson(@PathVariable Integer id, @Valid @RequestBody Person updatedPerson) {
		final Person foundPerson = findPerson(id);
		foundPerson.setAge(updatedPerson.getAge());
		foundPerson.setName(updatedPerson.getName());
		return foundPerson;
	}

	@DeleteMapping("/{id}")
	public void deletePerson(@PathVariable Integer id) {
		persons.remove(findPerson(id));
	}

	private Person findPerson(Integer id) {
		return persons.stream()
			.filter(person -> person.getId().equals(id))
			.findFirst()
			.orElseThrow(() -> new RuntimeException("Person not found, id - " + id));
	}

	private Integer generateNewId() {
		final Integer maxId = persons.stream()
			.map(Person::getId)
			.reduce(Integer::max)
			.orElseThrow(NoSuchElementException::new);

		return maxId + 1;
	}

}
