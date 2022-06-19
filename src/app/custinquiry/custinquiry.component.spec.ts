import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustinquiryComponent } from './custinquiry.component';

describe('CustinquiryComponent', () => {
  let component: CustinquiryComponent;
  let fixture: ComponentFixture<CustinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustinquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
