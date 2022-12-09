import { Component, OnInit } from '@angular/core';
import { TotsItemNavigation } from '../../entities/tots-item-navigation';
import { TotsLayoutService } from '../../services/tots-layout.service';

@Component({
  selector: 'tots-horizontal-navigation',
  templateUrl: './tots-horizontal-navigation.component.html',
  styleUrls: ['./tots-horizontal-navigation.component.scss']
})
export class TotsHorizontalNavigationComponent implements OnInit {

  leftItems = new Array<TotsItemNavigation>();
  rightItems = new Array<TotsItemNavigation>();

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.layoutService.navigationItems.subscribe(res => {
      this.leftItems = res.left;
      this.rightItems = res.right;
    });
  }
}
