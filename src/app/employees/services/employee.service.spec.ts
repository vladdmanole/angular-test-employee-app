import { TestBed } from '@angular/core/testing';
import { EmployeeStoreService } from './employee.service';


describe('EmployeeService', () => {
  let service: EmployeeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
