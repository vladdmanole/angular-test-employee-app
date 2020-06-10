import { EmployeeSearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeSearchFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
