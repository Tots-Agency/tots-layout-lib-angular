import { Component } from '@angular/core';
import { TotsLayoutService } from '../../services/tots-layout.service';
import { TotsItemNavigation } from '../../entities/tots-item-navigation';

@Component({
  selector: 'tots-left-sidebar',
  templateUrl: './tots-left-sidebar.component.html',
  styleUrls: ['./tots-left-sidebar.component.scss'],
  standalone: false
})
export class TotsLeftSidebarComponent {

  leftItems = new Array<TotsItemNavigation>();

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.layoutService.navigationItems.subscribe(res => {
      this.leftItems = res.left;
    });
  }
}
