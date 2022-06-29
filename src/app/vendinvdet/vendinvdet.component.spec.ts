import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendinvdetComponent } from './vendinvdet.component';

describe('VendinvdetComponent', () => {
  let component: VendinvdetComponent;
  let fixture: ComponentFixture<VendinvdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendinvdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendinvdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
