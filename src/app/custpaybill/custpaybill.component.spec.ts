import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustpaybillComponent } from './custpaybill.component';

describe('CustpaybillComponent', () => {
  let component: CustpaybillComponent;
  let fixture: ComponentFixture<CustpaybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustpaybillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustpaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
