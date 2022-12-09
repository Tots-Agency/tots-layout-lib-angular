import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemNavigationComponent } from './user-item-navigation.component';

describe('UserItemNavigationComponent', () => {
  let component: UserItemNavigationComponent;
  let fixture: ComponentFixture<UserItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
