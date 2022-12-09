import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonItemNavigationComponent } from './button-item-navigation.component';

describe('ButtonItemNavigationComponent', () => {
  let component: ButtonItemNavigationComponent;
  let fixture: ComponentFixture<ButtonItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
