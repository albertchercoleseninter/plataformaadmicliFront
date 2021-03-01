import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterStepComponent } from './promoter-step.component';

describe('PromoterStepComponent', () => {
  let component: PromoterStepComponent;
  let fixture: ComponentFixture<PromoterStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
