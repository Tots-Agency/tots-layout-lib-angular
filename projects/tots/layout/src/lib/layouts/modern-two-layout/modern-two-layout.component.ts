import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotsBaseLayoutConfig } from '../../entities/tots-base-layout-config';

@Component({
  selector: 'lib-modern-two-layout',
  templateUrl: './modern-two-layout.component.html',
  styleUrls: ['./modern-two-layout.component.scss']
})
export class ModernTwoLayoutComponent implements OnInit {
  config?: TotsBaseLayoutConfig;

  constructor(
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.route.data.subscribe(result => {
      this.config = result as TotsBaseLayoutConfig;
    });
  }
}
