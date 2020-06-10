import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/Employee';

@Pipe({
  name: 'employeeSearchFilter',
})
export class EmployeeSearchFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchTerms: string) {
    if (!employees) {
      return [];
    }

    if (!searchTerms) {
      return employees;
    }

    searchTerms = searchTerms.toLocaleLowerCase();
    return employees.filter(employee => {
      return this.includesTerm(searchTerms, employee.FirstName, employee.SecondName, employee.Position);
    });
  }

  includesTerm(searchTerms: string, ...searchStrings: string[]) {
    return !!searchStrings.find(searchString => searchString.toLocaleLowerCase().includes(searchTerms));
  }
}
