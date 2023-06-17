import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsLeftSidebarLayoutComponent } from './left-sidebar-layout.component';

describe('LeftSidebarLayoutComponent', () => {
  let component: TotsLeftSidebarLayoutComponent;
  let fixture: ComponentFixture<TotsLeftSidebarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsLeftSidebarLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsLeftSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
