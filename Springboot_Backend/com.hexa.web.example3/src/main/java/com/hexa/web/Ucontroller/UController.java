package com.hexa.web.Ucontroller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.web.Login.Login;

@RestController
@RequestMapping("/users")
public class UController {

	List<Login> users;
	
	UController(){
		users = new ArrayList();
		users.add(new Login(101,"Ayush","ayush@123"));
		users.add(new Login(102,"Aman","aman@123"));
		users.add(new Login(103,"Akash","akash@123"));
		users.add(new Login(104,"Anuj","anuj@123"));
		users.add(new Login(105,"Arun","arun@123"));
	}
	
	@GetMapping("/getallusers")
    @ResponseBody
    public List<Login> getData() {
        return users;
    }
	
	@PostMapping("/signin/{uname}/{upass}")
	@ResponseBody
	public Login signin(@PathVariable String uname, @PathVariable String upass) {
		
	    Login l = users.stream().filter(t -> t.getUsername().equals(uname) && t.getPassword().equals(upass)).findFirst().orElse(null);          

	    if (l == null) {
	        return null;
	    } else {
	        return l;
	    }
	}
	
	@PostMapping("/signup")
    @ResponseBody
    public String savedata(@RequestBody Login l){
		
		for(Login user : users)
		{
			if(user.getUid() == l.getUid())
			{
				return "User with this id already exists";
			}
		}
    	users.add(l);
    	return "Signup successfully";
    	
    }
	
	@PutMapping("/updatepass/{uid}")
    @ResponseBody
    public Login updatepass(@PathVariable int uid, @RequestBody Login l) {
    	
    	Login s1 = (Login) users.stream().filter((t)->t.getUid()==uid).findFirst().orElse(null);

    	if (s1 == null) {
            return null;
        }
    	
    	s1.setPassword(l.getPassword());
    	
    	return s1;
    }
	
	@DeleteMapping("/remove/{uid}")
	@ResponseBody
	public List<Login> remove(@PathVariable int uid) {
        
        users = users.stream().filter((t) -> t.getUid() != uid).collect(Collectors.toList());
        return users; 
    }
}

