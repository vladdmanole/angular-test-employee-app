import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListItemComponent } from './employee-list-item.component';

describe('EmployeeListItemComponent', () => {
  let component: EmployeeListItemComponent;
  let fixture: ComponentFixture<EmployeeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
