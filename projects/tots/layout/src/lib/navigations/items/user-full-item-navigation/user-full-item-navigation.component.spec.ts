import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullItemNavigationComponent } from './user-full-item-navigation.component';

describe('UserFullItemNavigationComponent', () => {
  let component: UserFullItemNavigationComponent;
  let fixture: ComponentFixture<UserFullItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFullItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFullItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
