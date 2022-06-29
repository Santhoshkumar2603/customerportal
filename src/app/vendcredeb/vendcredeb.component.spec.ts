import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendcredebComponent } from './vendcredeb.component';

describe('VendcredebComponent', () => {
  let component: VendcredebComponent;
  let fixture: ComponentFixture<VendcredebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendcredebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendcredebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
