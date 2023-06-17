import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsLeftSidebarComponent } from './tots-left-sidebar.component';

describe('TotsLeftSidebarComponent', () => {
  let component: TotsLeftSidebarComponent;
  let fixture: ComponentFixture<TotsLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
