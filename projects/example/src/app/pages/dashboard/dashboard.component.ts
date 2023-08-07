import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TotsConfirmModalComponent, TotsConfirmModalConfig } from 'projects/tots/confirm-modal/src/public-api';
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

  constructor(
    protected dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  testConfirmModal() {
    this.dialog.open(TotsConfirmModalComponent, { data: new TotsConfirmModalConfig('Are you sure?'), width: '420px', })
  }
}
