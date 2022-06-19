import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdeliveryComponent } from './custdelivery.component';

describe('CustdeliveryComponent', () => {
  let component: CustdeliveryComponent;
  let fixture: ComponentFixture<CustdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
