import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsBreadcrumbComponent } from './tots-breadcrumb.component';

describe('TotsBreadcrumbComponent', () => {
  let component: TotsBreadcrumbComponent;
  let fixture: ComponentFixture<TotsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
