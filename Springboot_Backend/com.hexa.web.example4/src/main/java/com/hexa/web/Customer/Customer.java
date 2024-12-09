package com.hexa.web.Customer;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Entity
public class Customer {
    @Id
    int actno;
    
    @NotBlank(message="Name cannot be null")
    //@Pattern(regexp = "^[A-Z a-z]", message = "Name error")
    String firstname;
    @Min(value=1000, message = "Minimum fee should be 1000")
    double fee;

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

    @Override
    public String toString() {
        return "Customer [actno=" + actno + ", firstname=" + firstname + ", fee=" + fee + "]";
    }

    public Customer() {}

    public Customer(int actno, String firstname, double fee) {
        this.actno = actno;
        this.firstname = firstname;
        this.fee = fee;
    }
}
