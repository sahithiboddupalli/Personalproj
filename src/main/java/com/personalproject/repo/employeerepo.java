package com.personalproject.repo;

import com.personalproject.model.Employee;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface employeerepo extends JpaRepository<Employee, Integer> {

	//void delete(Integer id);

	Optional<Employee> findEmployeeById(Integer id);
}
