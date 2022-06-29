import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendfinancesheetComponent } from './vendfinancesheet.component';

describe('VendfinancesheetComponent', () => {
  let component: VendfinancesheetComponent;
  let fixture: ComponentFixture<VendfinancesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendfinancesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendfinancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
