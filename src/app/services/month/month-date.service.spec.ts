import { TestBed } from '@angular/core/testing';

import { MonthDateService } from './month-date.service';

describe('MonthDateService', () => {
  let service: MonthDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
