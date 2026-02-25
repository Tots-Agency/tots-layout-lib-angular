import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotsBaseLayoutConfig } from '../../entities/tots-base-layout-config';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-modern-two-layout',
  templateUrl: './modern-two-layout.component.html',
  styleUrls: ['./modern-two-layout.component.scss'],
  standalone: false
})
export class ModernTwoLayoutComponent implements OnInit {
  config?: TotsBaseLayoutConfig;

  constructor(
    protected route: ActivatedRoute,
    private destroyRef:DestroyRef
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.route.data.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(result => {
      this.config = result as TotsBaseLayoutConfig;
    });
  }
}
