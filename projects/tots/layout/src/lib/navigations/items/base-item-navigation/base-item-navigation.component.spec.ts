import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItemNavigationComponent } from './base-item-navigation.component';

describe('BaseItemNavigationComponent', () => {
  let component: BaseItemNavigationComponent;
  let fixture: ComponentFixture<BaseItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
