# Employee Management System

This project is an end-to-end full-stack web application that allows users to manage employee records efficiently using a simple and user-friendly interface. Instead of maintaining employee details manually, users can perform operations like adding, viewing, updating, and deleting employee records easily.

The Employee Management System is designed to help organizations store employee information in a structured way using Java Spring Boot, Angular, and MySQL. The system makes employee data management faster, simpler, and more efficient.

A user can perform operations like:

* Add a new employee  
* View all employee details  
* Update employee information  
* Delete employee records  

The system uses REST APIs to connect the frontend and backend, ensuring smooth communication and real-time updates.

---

## Project Highlights

* Employee Management System is a full-stack application for managing:

  * Employee records  
  * Employee personal details  
  * Employee information updates  
  * Employee database operations  

* All employee data is maintained in a MySQL database.

* A full-stack web application is built using:

  * Java Spring Boot  
  * Spring Data JPA  
  * Hibernate  
  * Angular  
  * TypeScript  
  * HTML  
  * CSS  
  * Bootstrap  
  * MySQL  
  * Maven  

* Users can manage employee details through a simple web interface.

* The system performs database-driven CRUD operations with real-time updates.

---

## Installation

1. Clone the repository:

  ```bash
      git clone https://github.com/Sandhiya-S67/employee-manager-app.git
  ````

2. Navigate to the project directory:

  ```bash id="kk2rth"
      cd employee-manager-app
  ```

3. For backend setup, configure the database inside:

  ```bash id="p7skv1"
      backend/src/main/resources/application.properties
  ```

4. Update the MySQL details:

  ```properties id="jblsux"
      spring.application.name=employeemanager

      server.port = 8080

      spring.datasource.url=jdbc:mysql://localhost:3306/employeemanager
      spring.datasource.username=your-username
      spring.datasource.password=your-password
      spring.jpa.show-sql=true
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
  ```

5. Run the Spring Boot application:

  ```bash id="xv04h0"
      cd backend
      mvn spring-boot:run
  ```

6. For frontend setup, run:

  ```bash id="8ftjbi"
      cd frontend
      npm install
      ng serve
  ```
