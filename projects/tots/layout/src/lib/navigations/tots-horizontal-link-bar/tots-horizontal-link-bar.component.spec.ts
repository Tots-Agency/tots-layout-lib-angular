import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsHorizontalLinkBarComponent } from './tots-horizontal-link-bar.component';

describe('TotsHorizontalLinkBarComponent', () => {
  let component: TotsHorizontalLinkBarComponent;
  let fixture: ComponentFixture<TotsHorizontalLinkBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsHorizontalLinkBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsHorizontalLinkBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
