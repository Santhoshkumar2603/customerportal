import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendpaymentComponent } from './vendpayment.component';

describe('VendpaymentComponent', () => {
  let component: VendpaymentComponent;
  let fixture: ComponentFixture<VendpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
