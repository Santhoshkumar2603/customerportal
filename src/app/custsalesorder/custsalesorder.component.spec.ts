import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustsalesorderComponent } from './custsalesorder.component';

describe('CustsalesorderComponent', () => {
  let component: CustsalesorderComponent;
  let fixture: ComponentFixture<CustsalesorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustsalesorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustsalesorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
