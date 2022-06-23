import { TestBed } from '@angular/core/testing';

import { CustbillService } from './custbill.service';

describe('CustbillService', () => {
  let service: CustbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
