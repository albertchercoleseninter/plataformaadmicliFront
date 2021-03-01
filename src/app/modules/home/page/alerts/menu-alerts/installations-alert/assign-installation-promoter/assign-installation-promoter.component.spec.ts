import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInstallationPromoterComponent } from './assign-installation-promoter.component';

describe('AssignInstallationPromoterComponent', () => {
  let component: AssignInstallationPromoterComponent;
  let fixture: ComponentFixture<AssignInstallationPromoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInstallationPromoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInstallationPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
