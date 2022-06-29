import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendprofileComponent } from './vendprofile.component';

describe('VendprofileComponent', () => {
  let component: VendprofileComponent;
  let fixture: ComponentFixture<VendprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
