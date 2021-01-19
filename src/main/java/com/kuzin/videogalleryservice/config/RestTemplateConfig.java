package com.kuzin.videogalleryservice.config;

import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class RestTemplateConfig {

	@Bean
	public RestTemplate restTemplate(
		final ClientHttpRequestFactory registrationStateServiceClientHttpRequestFactory,
		final ObjectMapper mapper) {

		final RestTemplate restTemplate = new RestTemplate(registrationStateServiceClientHttpRequestFactory);
		final List<HttpMessageConverter<?>> messageConverters = restTemplate.getMessageConverters();
		messageConverters.add(0, new MappingJackson2HttpMessageConverter(mapper));

		return restTemplate;
	}

	@Bean
	public ClientHttpRequestFactory registrationStateServiceClientHttpRequestFactory() {
		final HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();

		factory.setConnectTimeout(25000);
		factory.setReadTimeout(25000);

		return factory;
	}

}
