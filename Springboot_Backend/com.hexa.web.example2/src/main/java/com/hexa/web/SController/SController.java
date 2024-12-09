package com.hexa.web.SController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hexa.web.Student.Student;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class SController {

    List<Student> users;

    SController() {
        users = new ArrayList<>();
        users.add(new Student(101, "Ayush", 2000.0));
        users.add(new Student(102, "Anil", 3000.0));
        users.add(new Student(103, "Anushka", 2000.0));
        users.add(new Student(104, "Anaya", 4000.0));
    }

    @GetMapping("/getallusers")
    @ResponseBody
    public List<Student> getData() {
        return users;
    }

    @GetMapping("/searchbyroll/{rn}")
    @ResponseBody
    public Student getData(@PathVariable int rn) {
    	return (Student) users.stream().filter((t)->t.getRollno()==rn).findFirst().orElse(null);

    }
    
    @GetMapping("/searchbyrollname/{rn}/{name}")
    @ResponseBody
    public Student getData1(@PathVariable int rn, @PathVariable String name)
    {
    	return (Student) users.stream().filter((t)->t.getRollno()==rn && t.getName().equalsIgnoreCase(name)).findFirst().orElse(null);
    }
    
    @DeleteMapping("/deletebyroll/{rn}")
    @ResponseBody
    public List<Student> deleteData(@PathVariable int rn) {
        
        users = users.stream().filter((t) -> t.getRollno() != rn).collect(Collectors.toList());
        return users; 
    }
    
    @PostMapping("/savedata")
    @ResponseBody
    public List<Student> savedata(@RequestBody Student s){
    	users.add(s);
    	return users;
    	
    }
    
    @PutMapping("/updatedata/{rn}")
    @ResponseBody
    public Student updateData(@PathVariable int rn, @RequestBody Student s ) {
    	
    	Student s1 = (Student) users.stream().filter((t)->t.getRollno()==rn).findFirst().orElse(null);

    	if (s1 == null) {
            return null;
        }
    	
    	s1.setName(s.getName());
    	s1.setFee(s.getFee());
    	
    	return s1;
    }
    
    
    @DeleteMapping("/deletebyroll")
    @ResponseBody
    public List<Student> removebyroll(@RequestParam int rn) {
        
        users = users.stream().filter((t) -> t.getRollno() != rn).collect(Collectors.toList());
        return users; 
    }
    
    @PutMapping("/updatedata")
    @ResponseBody
    public Student updateData1(@RequestParam int rn, @RequestBody Student s ) {
    	
    	Student s1 = (Student) users.stream().filter((t)->t.getRollno()==rn).findFirst().orElse(null);

    	if (s1 == null) {
            return null;
        }
    	
    	s1.setName(s.getName());
    	s1.setFee(s.getFee());
    	
    	return s1;
    }
    
    


}
