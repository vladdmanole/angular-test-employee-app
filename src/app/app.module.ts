import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/components/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './employees/components/employee-list-item/employee-list-item.component';
import { EmployeeSearchFilterPipe } from './employees/pipes/search-filter.pipe';
import { SortAlphabeticalPipe } from './employees/pipes/sort-alphabetical.pipe';
import { EmployeeEditComponent } from './employees/components/employee-edit/employee-edit.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeSearchFilterPipe,
    SortAlphabeticalPipe,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
