import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterAlertComponent } from './promoter-alert.component';

describe('PromoterAlertComponent', () => {
  let component: PromoterAlertComponent;
  let fixture: ComponentFixture<PromoterAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
