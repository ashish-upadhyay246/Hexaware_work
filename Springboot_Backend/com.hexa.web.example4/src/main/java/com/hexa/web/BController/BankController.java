package com.hexa.web.BController;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.ReturnedType;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.web.Bankrepository.CustomerDTO;
import com.hexa.web.Bankservice.Bankservice;
import com.hexa.web.CustomException.InsufficientBalanceException;
import com.hexa.web.CustomException.InvalidCustomerDataException;
import com.hexa.web.CustomException.NoCustomerFoundException;
import com.hexa.web.Customer.Customer;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class BankController {
	@Autowired
	Bankservice ser;
	
	@PostMapping("/savedata")
    public ResponseEntity<?> saveD(@RequestBody CustomerDTO c) throws InvalidCustomerDataException {
        
            Customer d = maptoEntity(c);
            
            if (d.getFirstname() == null || d.getFirstname().isEmpty()) {
                throw new InvalidCustomerDataException("Customer name cannot be null or empty");
            }
            
            Customer r = ser.saveData(d);

            CustomerDTO t = maptoDTO(r);
            return new ResponseEntity<>(t, HttpStatus.CREATED);
            
        
    }
	
	@GetMapping("/getall")
	public ResponseEntity< List<CustomerDTO> >getdata(){
		List<Customer> l = ser.show();
		
		List<CustomerDTO> users = new ArrayList<>();
		
		for(Customer i : l)
		{
			CustomerDTO t = maptoDTO(i);
			users.add(t);
		}
		
		if(l.isEmpty())
		{
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<>(users,HttpStatus.OK);
	}
	
	@GetMapping("/getId/{ac}")
	public ResponseEntity<?> getById(@PathVariable int ac) throws NoCustomerFoundException {
	    Customer r = ser.getdatabyid(ac);
	    if (r == null) {
	        throw new NoCustomerFoundException("Customer with account number " + ac + " not found.");
	    }
	    return new ResponseEntity<>(r, HttpStatus.OK);
	}
	
	@DeleteMapping("/removeone/{ac}")
	public ResponseEntity<?> removeData(@PathVariable int ac) {
		
		try {
			String s= ser.removeDataa(ac);
			
			if(s.equals("Removed"))
			{
				return new ResponseEntity<String>(s,HttpStatus.OK);
			}
			else {
				return new ResponseEntity<String>("Account no. not found",HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>("An error occurred while deleting customer data.",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/updatefee/{ac}/{fe}")
	public ResponseEntity<String> updatefee(@PathVariable int ac,@PathVariable double fe) {
		String s= ser.updatedata(ac,fe);
		
		if(s.equals("Updated")) {
			return new ResponseEntity<>(s,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>("Not found",HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping("/depositfee/{ac}/{fe}")
	public String depositfee(@PathVariable int ac,@PathVariable double fe) {
		String s= ser.depositdata(ac,fe);
		return s;
	}
	
	@PutMapping("/withdrawfee/{ac}/{fe}")
    public ResponseEntity<String> withdrawFee(@PathVariable int ac, @PathVariable double fe) throws InsufficientBalanceException {
        
            String result = ser.withdrawdata(ac, fe);
            
            if (result.equals("Insufficient Balance")) {
                throw new InsufficientBalanceException("Insufficient balance to complete the withdrawal");
            }
            
            return new ResponseEntity<>(result, HttpStatus.OK);
        
    }
	
	@GetMapping("/getbyname/{name}")
	public List<Customer> getbyname(@PathVariable String name)
	{
		List<Customer> c = ser.getbyname(name);
		
		if (c.isEmpty()) {
	        return List.of();
	    }
		return c;
	}
	
	@GetMapping("/getbynamelike/{name}")
	public List<Customer> getbynamelike(@PathVariable String name)
	{
		List<Customer> c = ser.getbynamelike(name);
		
		if (c.isEmpty()) {
	        return List.of();
	    }
		return c;
	}
	
	@GetMapping("/getbynamequery/{name}")
	public List<Customer> getbynamequery(@PathVariable String name)
	{
		List<Customer> c = ser.getbynamequery(name);
		
		if (c.isEmpty()) {
	        return List.of();
	    }
		return c;
	}
	
	@GetMapping("/getallquery")
	public List<Customer> getall()
	{
		List<Customer> c = ser.getall();
		
		if (c.isEmpty()) {
	        return List.of();
	    }
		return c;
	}
	
	@DeleteMapping("/removeonebyquery/{ac}")
	public String removeDataQuery(@PathVariable int ac) {
		String s = ser.removeDataQuery(ac);
		return s;
	}
	
	@PutMapping("/updatefeebyquery/{ac}/{fe}")
	public String updatefeequery(@PathVariable int ac,@PathVariable double fe) {
		String s= ser.updatedataquery(ac,fe);
		return s;
	}
	
//	@GetMapping("/countcustomers")
//	public ResponseEntity<Integer> countcustomers()
//	{
//		int ctr= ser.countcustomers();
//		return new ResponseEntity<Integer>(ctr,HttpStatus.OK);
//	}
	
	@GetMapping("/countcustomers")
	public ResponseEntity<List<String>> countcustomersname()
	{
		List<String> names = ser.countcustomers();
		
		return new ResponseEntity<List<String>>(names,HttpStatus.OK);
	}
	
	
	CustomerDTO maptoDTO(Customer c)
	{
		return new CustomerDTO(c.getActno(),c.getFirstname(),c.getFee());
	}
	
	Customer maptoEntity(CustomerDTO c)
	{
		return new Customer(c.getActno(),c.getFirstname(),c.getFee());
	}
	
	
}