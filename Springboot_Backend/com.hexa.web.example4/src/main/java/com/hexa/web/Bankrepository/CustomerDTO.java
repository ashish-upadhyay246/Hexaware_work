package com.hexa.web.Bankrepository;

public class CustomerDTO {
	
    int actno;
    String firstname;
    double fee;
    
	@Override
	public String toString() {
		return "CustomerDTO [actno=" + actno + ", firstname=" + firstname + ", fee=" + fee + "]";
	}

	public int getActno() {
		return actno;
	}

	public void setActno(int actno) {
		this.actno = actno;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}
	
	public CustomerDTO() {
		
	}

	public CustomerDTO(int actno, String firstname, double fee) {
		super();
		this.actno = actno;
		this.firstname = firstname;
		this.fee = fee;
	}
    
    
}
