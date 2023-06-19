import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleItemNavigationComponent } from './subtitle-item-navigation.component';

describe('SubtitleItemNavigationComponent', () => {
  let component: SubtitleItemNavigationComponent;
  let fixture: ComponentFixture<SubtitleItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleItemNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
