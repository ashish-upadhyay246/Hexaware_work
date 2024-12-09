package com.hexa.web.CustomException;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionController {

	@ExceptionHandler(NoCustomerFoundException.class)
	public ResponseEntity<ErrorDetails> noCustomerFound(NoCustomerFoundException e) {
		
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),e.getMessage(),"location not found","customer not found");
		
		return new ResponseEntity<ErrorDetails>(errorDetails,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(InvalidCustomerDataException.class)
	public ResponseEntity<ErrorDetails> handleInvalidCustomerData(InvalidCustomerDataException e) {
	    ErrorDetails errorDetails = new ErrorDetails(
	        LocalDateTime.now(),
	        e.getMessage(),
	        "Invalid data provided",
	        "Data validation error"
	    );
	    return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(InsufficientBalanceException.class)
	public ResponseEntity<ErrorDetails> handleInsufficientBalance(InsufficientBalanceException e) {
	    ErrorDetails errorDetails = new ErrorDetails(
	        LocalDateTime.now(),
	        e.getMessage(),
	        "Insufficient balance for transaction",
	        "Transaction error"
	    );
	    return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}
	
}
