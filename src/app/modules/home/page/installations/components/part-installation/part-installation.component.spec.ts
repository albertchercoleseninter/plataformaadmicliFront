import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallationComponent } from './part-installation.component';

describe('PartInstallationComponent', () => {
  let component: PartInstallationComponent;
  let fixture: ComponentFixture<PartInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
