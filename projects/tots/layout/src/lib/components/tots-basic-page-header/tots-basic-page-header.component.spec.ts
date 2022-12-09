import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsBasicPageHeaderComponent } from './tots-basic-page-header.component';

describe('TotsBasicPageHeaderComponent', () => {
  let component: TotsBasicPageHeaderComponent;
  let fixture: ComponentFixture<TotsBasicPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsBasicPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsBasicPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
