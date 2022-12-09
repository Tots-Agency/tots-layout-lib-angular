import { Component, OnInit } from '@angular/core';
import { ButtonItemNavigationComponent, ImageItemNavigationComponent, TotsLayoutService } from 'projects/tots/layout/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    protected layoutService: TotsLayoutService
  ) {}

  ngOnInit(): void {
    this.loadNavigation();
  }

  loadNavigation() {
    console.log('load navigation2');
    this.layoutService.putNavigationHorizontal([
      { component: ImageItemNavigationComponent, data: { url: 'https://tots.agency/assets/img/logos/logo-horiz.svg' } },
      { component: ButtonItemNavigationComponent, data: { path: '/dashboard', title: 'Dashboard', icon: 'settings' }},
    ],
    [

    ])
  }
}
