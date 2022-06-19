import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustinvoiceComponent } from './custinvoice.component';

describe('CustinvoiceComponent', () => {
  let component: CustinvoiceComponent;
  let fixture: ComponentFixture<CustinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
