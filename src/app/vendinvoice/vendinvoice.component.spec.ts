import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendinvoiceComponent } from './vendinvoice.component';

describe('VendinvoiceComponent', () => {
  let component: VendinvoiceComponent;
  let fixture: ComponentFixture<VendinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
