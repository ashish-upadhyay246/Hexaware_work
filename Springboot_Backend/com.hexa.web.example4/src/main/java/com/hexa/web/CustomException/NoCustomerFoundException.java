package com.hexa.web.CustomException;

public class NoCustomerFoundException extends Exception{
	
	String mssg;
	int ac;
	
	public NoCustomerFoundException(String mssg) {
		super(mssg);
		this.mssg = mssg;
	}
	
	public NoCustomerFoundException(String mssg, int ac) {
		super(mssg);
		this.mssg = mssg;
		this.ac = ac;
	}
	
	public String getMessage() {
		
		return mssg;
	}
	
	public int getAc() {
        return ac;
    }
	

}
