import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInstallationComponent } from './billing-installation.component';

describe('BillingInstallationComponent', () => {
  let component: BillingInstallationComponent;
  let fixture: ComponentFixture<BillingInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
