import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcreditmemoComponent } from './custcreditmemo.component';

describe('CustcreditmemoComponent', () => {
  let component: CustcreditmemoComponent;
  let fixture: ComponentFixture<CustcreditmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustcreditmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustcreditmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
