import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformYouComponent } from './inform-you.component';

describe('InformYouComponent', () => {
  let component: InformYouComponent;
  let fixture: ComponentFixture<InformYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
