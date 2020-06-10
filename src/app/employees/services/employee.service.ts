import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/Employee';
import employeeJson from '../../../assets/data/employees.json';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeStoreService {
  private employees = new BehaviorSubject<Employee[]>([]);
  public readonly employees$ = this.employees.asObservable();

  employeeStorageKey = 'employee-local';

  constructor(
    private storageService: LocalStorageService
  ) {
    let employees: Employee[];
    const employeesInStorage: Employee[] = JSON.parse(
      this.storageService.getStorage(this.employeeStorageKey)
    );

    if (employeesInStorage?.length) {
      employees = employeesInStorage;
    } else {
      employees = employeeJson as Employee[];
    }

    this.employees.next(employees);
  }

  deleteEmployee(id: string) {
    const employees = this.employees.getValue();
    const filteredEmployees = employees.filter(
      (employee) => employee.Id !== id
    );
    this.employees.next(filteredEmployees);

    this.storageService.setStorage(
      this.employeeStorageKey,
      JSON.stringify(filteredEmployees)
    );
  }

  updateEmployees(employees: Employee[]) {
    this.employees.next(employees);

    this.storageService.setStorage(
      this.employeeStorageKey,
      JSON.stringify(employees)
    );
  }
}
