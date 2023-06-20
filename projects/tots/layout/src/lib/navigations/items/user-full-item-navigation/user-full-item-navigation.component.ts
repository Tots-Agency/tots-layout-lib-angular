import { Component, Input, OnInit } from '@angular/core';
import { TotsLayoutService } from '../../../services/tots-layout.service';

@Component({
  selector: 'tots-user-full-item-navigation',
  templateUrl: './user-full-item-navigation.component.html',
  styleUrls: ['./user-full-item-navigation.component.scss']
})
export class UserFullItemNavigationComponent implements OnInit {

  @Input() data: any;

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  ngOnInit(): void {
  }

  onClick(item: any) {
    this.layoutService.navigationClick.next(item);
  }
}