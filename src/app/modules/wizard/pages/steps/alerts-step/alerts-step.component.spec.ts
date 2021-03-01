import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsStepComponent } from './alerts-step.component';

describe('AlertsStepComponent', () => {
  let component: AlertsStepComponent;
  let fixture: ComponentFixture<AlertsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
