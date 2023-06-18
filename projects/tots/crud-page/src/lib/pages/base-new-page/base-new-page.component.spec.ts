import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNewPageComponent } from './base-new-page.component';

describe('BaseNewPageComponent', () => {
  let component: BaseNewPageComponent;
  let fixture: ComponentFixture<BaseNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
