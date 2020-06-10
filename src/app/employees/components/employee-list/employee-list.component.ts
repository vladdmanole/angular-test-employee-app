import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeStoreService } from '../../services/employee.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  employeeSearchField: string;

  employeeDeleteModalId = 'employee-delete-modal';

  constructor(
    public employeeService: EmployeeStoreService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  openDeleteDialog(dialogId: string, employeeId: string) {
    this.dialogService.open(dialogId, { employeeId });
  }

  closeDeleteDialog(confirm = false) {
    if (confirm) {
      const dialog = this.dialogService.get(this.employeeDeleteModalId);
      this.employeeService.deleteEmployee(dialog.data.employeeId);
    }

    this.dialogService.close(this.employeeDeleteModalId);
  }
}
