import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/Employee';

@Pipe({
  name: 'sortAlphabetical',
})
export class SortAlphabeticalPipe implements PipeTransform {
  transform(employees: Employee[], orderByKey: string) {
    if (!employees) {
      return [];
    }

    return employees.sort((a: Employee, b: Employee) =>
      a[orderByKey].localeCompare(b[orderByKey])
    );
  }
}
