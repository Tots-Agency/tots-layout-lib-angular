import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotsBaseLayoutConfig } from '../../entities/tots-base-layout-config';

@Component({
  selector: 'tots-modern-layout',
  templateUrl: './modern-layout.component.html',
  styleUrls: ['./modern-layout.component.scss']
})
export class ModernLayoutComponent implements OnInit {

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
