package com.hexa.web.Bankrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexa.web.Customer.Customer;

@Repository
public interface Bankrepo extends JpaRepository<Customer, Integer> {
	
	List<Customer> findByFirstname(String firstname);
	
	List<Customer> findByFirstnameLike(String firstname);
	
	@Query("select u from Customer u where u.firstname=:nm")
	public List<Customer> getUser(@Param("nm")String firsrname); 
	
	@Query(value="select * from customer",nativeQuery =true )
	  public List<Customer> findallcustomer();
	
	@Query(value="delete from customer where actno=:ac",nativeQuery=true)
	public int deleteByActno(int ac);
	
	@Query(value="update customer set fee=:fe where actno=:ac",nativeQuery=true)
	public int updateByActno(int ac,double fe);
	
}
