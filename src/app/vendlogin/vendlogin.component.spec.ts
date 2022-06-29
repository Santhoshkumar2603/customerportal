import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendloginComponent } from './vendlogin.component';

describe('VendloginComponent', () => {
  let component: VendloginComponent;
  let fixture: ComponentFixture<VendloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
