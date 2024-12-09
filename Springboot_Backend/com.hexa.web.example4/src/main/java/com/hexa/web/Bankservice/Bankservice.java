package com.hexa.web.Bankservice;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.web.Bankrepository.Bankrepo;
import com.hexa.web.CustomException.NoCustomerFoundException;
import com.hexa.web.Customer.Customer;


@Service
public class Bankservice {
	@Autowired
	Bankrepo rep;
	
	
	public Customer saveData(Customer c) {
		Customer r=rep.save(c);
		return r;
	}


	public List show() {
		List l=rep.findAll();
		return l;
	}


	public Customer getdatabyid(int ac) throws NoCustomerFoundException {
		Customer r= rep.findById(ac).orElse(null);
		
		if (r == null) {
            throw new NoCustomerFoundException("not found");
        }
		
		return r;
	}


	public String removeDataa(int ac) throws NoCustomerFoundException {
		String str;
		if(rep.findById(ac).isPresent()) {
		rep.deleteById(ac);
		str= "Removed";
		}
		else
		{
			str="Not found";
			throw new NoCustomerFoundException("Not found");
		}
		return str;	
		
	}


	public String updatedata(int ac, double fe) {
		String str;
		if(rep.findById(ac).isPresent()) {
			Customer r= rep.findById(ac).orElse(null);
			r.setFee(fe);
			rep.save(r);
			str= "Updated";
		}
		else
		{
			str="Not found";
		}
		return str;
	}


	public String depositdata(int ac, double fe) {
		String str;
		if(rep.findById(ac).isPresent()) {
			Customer r= rep.findById(ac).orElse(null);
			r.setFee(r.getFee()+fe);
			rep.save(r);
			str= "Updated";
		}
		else
		{
			str="Not found";
		}
		return str;
	}


	public String withdrawdata(int ac, double fe) {
		String str;
		if(rep.findById(ac).isPresent()) {
			Customer r= rep.findById(ac).orElse(null);
			if(r.getFee()>fe) {
				
			
			r.setFee(r.getFee()-fe);
			rep.save(r);
			str= "Withdrawn";
			}
			else {
				str= "Insufficient Balance";
			}
		}
		else
		{
			str="Not found";
		}
		return str;
	}


	public List<Customer> getbyname(String name) {
	    return rep.findByFirstname(name);
	}
	
	public List<Customer> getbynamelike(String name) {
	    return rep.findByFirstnameLike(name);
	}
	
	public List<Customer> getbynamequery(String name) {
	    return rep.getUser(name);
	}
	
	public List<Customer> getall() {
	    return rep.findallcustomer();
	}

	public String removeDataQuery(int ac) {
		
		String str;
		if(rep.findById(ac).isPresent()) {
			rep.deleteById(ac);
			str= "Removed";
		}
		else
			str="Not found";
		return str;
	}


	public String updatedataquery(int ac, double fe) {
		String str;
		if(rep.findById(ac).isPresent()) {
			Customer r= rep.findById(ac).orElse(null);
			r.setFee(fe);
			rep.save(r);
			str= "Updated";
		}
		else
		{
			str="Not found";
		}
		return str;
	}


	public List<String> countcustomers() {
		
		List<Customer> l=rep.findAll();
		
		List<String> names = l.stream().filter(t->t.getFee()>5000).map(Customer::getFirstname).collect(Collectors.toList());
		
		return names;
	}

}