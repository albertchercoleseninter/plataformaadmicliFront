import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationsAlertComponent } from './installations-alert.component';

describe('InstallationsAlertComponent', () => {
  let component: InstallationsAlertComponent;
  let fixture: ComponentFixture<InstallationsAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationsAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
