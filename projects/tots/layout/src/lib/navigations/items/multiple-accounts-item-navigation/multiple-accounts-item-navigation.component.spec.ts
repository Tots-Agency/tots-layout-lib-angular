import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAccountsItemNavigationComponent } from './multiple-accounts-item-navigation.component';

describe('MultipleAccountsItemNavigationComponent', () => {
  let component: MultipleAccountsItemNavigationComponent;
  let fixture: ComponentFixture<MultipleAccountsItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleAccountsItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleAccountsItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
