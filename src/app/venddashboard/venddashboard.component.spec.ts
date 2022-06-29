import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenddashboardComponent } from './venddashboard.component';

describe('VenddashboardComponent', () => {
  let component: VenddashboardComponent;
  let fixture: ComponentFixture<VenddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
