import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsBaseCrudPageComponent } from './base-crud-page.component';

describe('BaseCrudPageComponent', () => {
  let component: TotsBaseCrudPageComponent;
  let fixture: ComponentFixture<TotsBaseCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsBaseCrudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsBaseCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
