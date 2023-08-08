package com.sumitpatil.empfs.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_table")
public class Employee {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstNm;
	
	@Column(name = "last_name")
	private String lastNm;
	
	@Column(name = "email")
	private String email;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstNm() {
		return firstNm;
	}
	public void setFirstNm(String firstNm) {
		this.firstNm = firstNm;
	}
	public String getLastNm() {
		return lastNm;
	}
	public void setLastNm(String lastNm) {
		this.lastNm = lastNm;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Employee(String firstNm, String lastNm, String email) {
		super();
		this.firstNm = firstNm;
		this.lastNm = lastNm;
		this.email = email;
	}
	public Employee() {}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstNm=" + firstNm + ", lastNm=" + lastNm + ", email=" + email + "]";
	}
	
	
	
	

}
