import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsHorizontalNavigationComponent } from './tots-horizontal-navigation.component';

describe('TotsHorizontalNavigationComponent', () => {
  let component: TotsHorizontalNavigationComponent;
  let fixture: ComponentFixture<TotsHorizontalNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsHorizontalNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsHorizontalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
