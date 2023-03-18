package com.kuzin.videogalleryservice.exception.handler;

import lombok.extern.slf4j.*;
//import org.springframework.http.converter.*;
import org.springframework.web.bind.annotation.*;

//import static org.springframework.http.ResponseEntity.badRequest;

@Slf4j
@ControllerAdvice
public class ApplicationExceptionHandler {

	private static final String ILLEGAL_PARAM_ERROR_CODE = "Illegal param";
	private static final String NOT_FOUND_ERROR_CODE = "Resource not found";
	private static final String INTERNAL_SERVER_ERROR_ERROR_CODE = "Internal Server Error";


	// TODO: implement exception handling

//	@ExceptionHandler
//	public ResponseEntity<Errors> handleHttpMessageNotReadableException(final HttpMessageNotReadableException e) {
//		log.error("Exception: ", e);
//		return badRequest().body(buildErrors(defaultString(e.getMessage(), BAD_REQUEST.getReasonPhrase()), PARAMS,
//			ILLEGAL_PARAM_ERROR_CODE));
//	}

}
