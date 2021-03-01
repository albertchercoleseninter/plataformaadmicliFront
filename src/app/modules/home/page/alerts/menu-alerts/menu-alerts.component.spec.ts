import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlertsComponent } from './menu-alerts.component';

describe('MenuAlertsComponent', () => {
  let component: MenuAlertsComponent;
  let fixture: ComponentFixture<MenuAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
