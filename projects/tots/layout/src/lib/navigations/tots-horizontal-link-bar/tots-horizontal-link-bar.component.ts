import { Component, OnInit } from '@angular/core';
import { TotsLinkItem } from '../../entities/tots-link-item';
import { TotsLayoutService } from '../../services/tots-layout.service';

@Component({
  selector: 'tots-horizontal-link-bar',
  templateUrl: './tots-horizontal-link-bar.component.html',
  styleUrls: ['./tots-horizontal-link-bar.component.scss']
})
export class TotsHorizontalLinkBarComponent implements OnInit {
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
