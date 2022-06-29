import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendgoodsComponent } from './vendgoods.component';

describe('VendgoodsComponent', () => {
  let component: VendgoodsComponent;
  let fixture: ComponentFixture<VendgoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendgoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
