import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStepComponent } from './intro-step.component';

describe('IntroStepComponent', () => {
  let component: IntroStepComponent;
  let fixture: ComponentFixture<IntroStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
