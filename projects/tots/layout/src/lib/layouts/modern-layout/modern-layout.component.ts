import { Component, OnInit, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TotsBaseLayoutConfig } from '../../entities/tots-base-layout-config';

@Component({
  selector: 'tots-modern-layout',
  templateUrl: './modern-layout.component.html',
  styleUrls: ['./modern-layout.component.scss'],
  standalone: false
})
export class ModernLayoutComponent implements OnInit {

  config?: TotsBaseLayoutConfig;

  constructor(
    protected route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit() {
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

