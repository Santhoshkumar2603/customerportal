import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendpurchaseComponent } from './vendpurchase.component';

describe('VendpurchaseComponent', () => {
  let component: VendpurchaseComponent;
  let fixture: ComponentFixture<VendpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendpurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
