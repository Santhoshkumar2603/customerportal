import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustpaymentComponent } from './custpayment.component';

describe('CustpaymentComponent', () => {
  let component: CustpaymentComponent;
  let fixture: ComponentFixture<CustpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
