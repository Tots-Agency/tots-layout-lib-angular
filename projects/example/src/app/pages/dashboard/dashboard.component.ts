import { Component, OnInit } from '@angular/core';
import { TotsBreadcrumbItem } from 'projects/tots/layout/src/public-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  breadcrumbs: Array<TotsBreadcrumbItem> = [
    { title: 'Home' },
    { title: 'Title Test', path: '/dashboard' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
