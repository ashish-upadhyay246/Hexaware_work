package com.hexa.web.CustomException;

public class InsufficientBalanceException extends Exception {

	String detail;
    public InsufficientBalanceException(String message) {
        super(message);
        this.detail = message;
    }
    
    @Override
    public String getMessage() {
        return detail;
    }
}
