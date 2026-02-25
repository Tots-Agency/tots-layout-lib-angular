import { Component, signal } from '@angular/core';

@Component({
  selector: 'tots-left-sidebar-layout',
  templateUrl: './left-sidebar-layout.component.html',
  styleUrls: ['./left-sidebar-layout.component.scss'],
  standalone: false
})
export class TotsLeftSidebarLayoutComponent {

  isMenuOpen = signal(false);
}
