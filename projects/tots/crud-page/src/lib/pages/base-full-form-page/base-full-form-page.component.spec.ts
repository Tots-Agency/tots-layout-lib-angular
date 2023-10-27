import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFullFormPageComponent } from './base-full-form-page.component';

describe('BaseFullFormPageComponent', () => {
  let component: BaseFullFormPageComponent;
  let fixture: ComponentFixture<BaseFullFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFullFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFullFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
