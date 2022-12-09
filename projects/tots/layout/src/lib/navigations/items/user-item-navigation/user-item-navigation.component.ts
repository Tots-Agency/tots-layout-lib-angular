import { Component, Input, OnInit } from '@angular/core';
import { TotsLayoutService } from '../../../services/tots-layout.service';

@Component({
  selector: 'tots-user-item-navigation',
  templateUrl: './user-item-navigation.component.html',
  styleUrls: ['./user-item-navigation.component.scss']
})
export class UserItemNavigationComponent implements OnInit {

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
