package com.personalproject.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	private Integer id;
	private String name;
	private Integer phone;
	private String empcode;
	
	public Employee() {
		
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", phone=" + phone + ", empcode=" + empcode + "]";
	}
	public Employee(Integer id, String name, Integer phone, String empcode) {
		
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.empcode = empcode;

	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPhone() {
		return phone;
	}
	public void setPhone(Integer phone) {
		this.phone = phone;
	}
	public void setEmpcode(String empcode) {
		this.empcode = empcode;
	}
	public String getEmpcode() {
		return empcode;
	}
	
	

}
