package com.hexa.web.Student;

public class Student {
	 
	int rollno;
	String name;
	Double fee;
	Student()
	{
		
	}
	
	public Student(int rollno, String name, Double fee) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.fee = fee;
	}
 
	public int getRollno() {
		return rollno;
	}
	public void setRollno(int rollno) {
		this.rollno = rollno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getFee() {
		return fee;
	}
	public void setFee(Double fee) {
		this.fee = fee;
	}
 
	@Override
	public String toString() {
		return "Student [rollno=" + rollno + ", name=" + name + ", fee=" + fee + "]";
	}
	
	
	
	
}