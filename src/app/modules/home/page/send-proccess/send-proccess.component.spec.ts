import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProccessComponent } from './send-proccess.component';

describe('SendProccessComponent', () => {
  let component: SendProccessComponent;
  let fixture: ComponentFixture<SendProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
