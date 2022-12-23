import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsHorizontalTopbarComponent } from './tots-horizontal-topbar.component';

describe('TotsHorizontalTopbarComponent', () => {
  let component: TotsHorizontalTopbarComponent;
  let fixture: ComponentFixture<TotsHorizontalTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsHorizontalTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsHorizontalTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
