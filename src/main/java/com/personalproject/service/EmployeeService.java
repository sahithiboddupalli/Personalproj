package com.personalproject.service;

import com.personalproject.exception.UserNotFoundException;
import com.personalproject.model.Employee;
import com.personalproject.repo.employeerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final employeerepo repo;
    @Autowired
    public EmployeeService(employeerepo repo) {
        this.repo = repo;
    }
    public Employee addEmployee(Employee employee){
        employee.setEmpcode(UUID.randomUUID().toString());
        return repo.save(employee);
    }
    public List<Employee> findAllEmployee() {
    	return repo.findAll();
    }
    public Employee updateEmployee(Employee employee) {
    	return repo.save(employee);
    }
   /* public void deleteEmployee(Integer id) {
    	repo.delete(id);
    }*/
    public Employee findEmployeeById(Integer id) {
    	return repo.findEmployeeById(id)
    			.orElseThrow(()->new UserNotFoundException("User Not Found"));
    }
}
