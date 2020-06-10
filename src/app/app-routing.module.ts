import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employees/components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    data: { animation: 'ListPage' },
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { animation: 'EditPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
