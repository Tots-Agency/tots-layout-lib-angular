import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageItemNavigationComponent } from './image-item-navigation.component';

describe('ImageItemNavigationComponent', () => {
  let component: ImageItemNavigationComponent;
  let fixture: ComponentFixture<ImageItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
