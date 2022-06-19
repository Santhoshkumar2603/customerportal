import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustfinancesheetComponent } from './custfinancesheet.component';

describe('CustfinancesheetComponent', () => {
  let component: CustfinancesheetComponent;
  let fixture: ComponentFixture<CustfinancesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustfinancesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustfinancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
