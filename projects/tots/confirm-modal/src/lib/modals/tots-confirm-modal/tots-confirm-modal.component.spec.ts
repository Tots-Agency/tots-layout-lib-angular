import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsConfirmModalComponent } from './tots-confirm-modal.component';

describe('TotsConfirmModalComponent', () => {
  let component: TotsConfirmModalComponent;
  let fixture: ComponentFixture<TotsConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsConfirmModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
