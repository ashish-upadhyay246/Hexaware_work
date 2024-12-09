package com.hexa.web.CustomException;

public class InvalidCustomerDataException extends Exception {

    private String detail;

    public InvalidCustomerDataException(String message) {
        super(message);
        this.detail = message;
    }

    @Override
    public String getMessage() {
        return "Invalid data: " + detail;
    }
}
