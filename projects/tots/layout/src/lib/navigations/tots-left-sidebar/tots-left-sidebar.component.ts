import { Component } from '@angular/core';
import { TotsLinkItem } from '../../entities/tots-link-item';
import { TotsLayoutService } from '../../services/tots-layout.service';

@Component({
  selector: 'tots-left-sidebar',
  templateUrl: './tots-left-sidebar.component.html',
  styleUrls: ['./tots-left-sidebar.component.scss']
})
export class TotsLeftSidebarComponent {
  navigation = new Array<TotsLinkItem>();

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.layoutService.linkItems.subscribe(res => this.navigation = res);
  }
}
