import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernTwoLayoutComponent } from './modern-two-layout.component';

describe('ModernTwoLayoutComponent', () => {
  let component: ModernTwoLayoutComponent;
  let fixture: ComponentFixture<ModernTwoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernTwoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernTwoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
