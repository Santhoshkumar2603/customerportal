import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendrfqComponent } from './vendrfq.component';

describe('VendrfqComponent', () => {
  let component: VendrfqComponent;
  let fixture: ComponentFixture<VendrfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendrfqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendrfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
