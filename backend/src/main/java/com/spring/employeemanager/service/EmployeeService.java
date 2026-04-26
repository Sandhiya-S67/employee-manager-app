package com.spring.employeemanager.service;

import com.spring.employeemanager.exception.UserNotFoundException;
import com.spring.employeemanager.model.Employee;
import com.spring.employeemanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository)
    {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee)
    {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployees()
    {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id)
    {
        return employeeRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User by id "+id+" was ot found"));
    }

    public void deleteEmployee(Long id)
    {
        employeeRepository.deleteById(id);
    }
}
