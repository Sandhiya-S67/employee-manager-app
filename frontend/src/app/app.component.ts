import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  public allEmployees: Employee[] = [];
  public searchTerm = '';
  public editEmployee: Employee | null = null;
  public deleteEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.allEmployees = response;
        this.employees = [...response];
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to load employees:', error.message);
      },
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to add employee:', error.message);
        addForm.reset();
      },
    );
  }

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to update employee:', error.message);
      },
    );
  }

  public onDeleteEmloyee(employeeId: number | undefined): void {
    if (employeeId === undefined) {
      return;
    }

    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to delete employee:', error.message);
      },
    );
  }

  public searchEmployees(key: string): void {
    this.searchTerm = key.trim();

    if (!this.searchTerm) {
      this.employees = [...this.allEmployees];
      return;
    }

    const normalized = this.searchTerm.toLowerCase();
    this.employees = this.allEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(normalized) ||
        employee.email.toLowerCase().includes(normalized) ||
        employee.phone.toLowerCase().includes(normalized) ||
        employee.jobTitle.toLowerCase().includes(normalized),
    );
  }

  public onOpenModal(employee: Employee | null, mode: string): void {
    const container = document.getElementById('main-container');
    if (!container) {
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit' && employee) {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete' && employee) {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }
}
