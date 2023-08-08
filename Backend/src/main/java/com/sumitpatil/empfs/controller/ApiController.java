package com.sumitpatil.empfs.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sumitpatil.empfs.entity.*;
import com.sumitpatil.empfs.exception.NotFoundException;
import com.sumitpatil.empfs.repository.EmployeeRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class ApiController {
	
	@Autowired
	EmployeeRepo repo;
	
	//get all employees
	@GetMapping("/getAll")
	public List<Employee> getAll(){
		return repo.findAll();
		
	}
	
	//crete empolyee rest api
	@PostMapping("/addEmployee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return repo.save(employee);
	}
	
	//get employee by id
	@GetMapping("/getEmployee/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
		Employee e= repo.findById(id).orElseThrow(()->new NotFoundException("Employee not found with id : " + id));
		return ResponseEntity.ok(e);
	}
	
	//update employee
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emp){
		Employee e= repo.findById(id).orElseThrow(()->new NotFoundException("Employee not found with id : " + id));
		e.setFirstNm(emp.getFirstNm());
		e.setLastNm(emp.getLastNm());
		e.setEmail(emp.getEmail());
		e.setId(id);
		repo.save(e);
		return ResponseEntity.ok(e);
	}
	
	//delete employee
	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		Employee e= repo.findById(id).orElseThrow(()->new NotFoundException("Employee not found with id : " + id));
		repo.deleteById(id);
		Map<String,Boolean> response= new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}

}
