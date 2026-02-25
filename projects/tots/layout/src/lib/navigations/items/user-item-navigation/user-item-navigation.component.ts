import { Component, Input } from '@angular/core';
import { TotsLayoutService } from '../../../services/tots-layout.service';

@Component({
  selector: 'tots-user-item-navigation',
  templateUrl: './user-item-navigation.component.html',
  styleUrls: ['./user-item-navigation.component.scss'],
  standalone: false
})
export class UserItemNavigationComponent {

  @Input() data: any;

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  onClick(item: any) {
    this.layoutService.navigationClick.next(item);
  }
}
