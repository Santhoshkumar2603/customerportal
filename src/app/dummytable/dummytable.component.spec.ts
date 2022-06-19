import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummytableComponent } from './dummytable.component';

describe('DummytableComponent', () => {
  let component: DummytableComponent;
  let fixture: ComponentFixture<DummytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
