import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeStoreService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';

import { take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeEditComponent implements OnInit {
  employee$: Observable<Employee>;
  employeePosition: string;

  employees: Employee[];

  employeeInitialValue: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeStoreService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.employees$.pipe(take(1)).subscribe((employees) => {
      const employee = employees.find((emp) => emp.Id === id);
      this.employee$ = of(employee);

      this.employeeInitialValue = Object.assign({}, employee);
      this.employees = employees;
    });
  }

  onCancel() {
    this.router.navigate(['employee-list']);
    // return to employee-list
  }

  onSave() {
    this.employeeService.updateEmployees(this.employees);
    this.router.navigate(['employee-list']);
    // save this and then return to employee list
  }

  isSaveDisabled(employee: Employee) {
    return (
      employee.Position.trim() === '' ||
      employee.Position === this.employeeInitialValue.Position
    );
  }
}
