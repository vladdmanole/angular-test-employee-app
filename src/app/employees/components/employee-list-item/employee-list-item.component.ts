import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../models/Employee';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListItemComponent implements OnInit {
  @Input() employee: Employee;
  @Input() openDeleteDialogFn;
  @Input() closeDeleteDialogFn;
  @Input() deleteDialogId: string;

  constructor(
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  get employeeFullName() {
    return `${this.employee.FirstName} ${this.employee.SecondName}`;
  }

}
