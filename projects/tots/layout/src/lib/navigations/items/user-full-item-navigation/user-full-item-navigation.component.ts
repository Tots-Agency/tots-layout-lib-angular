import { Component, Input } from '@angular/core';
import { TotsLayoutService } from '../../../services/tots-layout.service';

@Component({
  selector: 'tots-user-full-item-navigation',
  templateUrl: './user-full-item-navigation.component.html',
  styleUrls: ['./user-full-item-navigation.component.scss'],
  standalone: false
})
export class UserFullItemNavigationComponent {

  @Input() data: any;

  constructor(
    protected layoutService: TotsLayoutService
  ) {}

  onClick(item: any) {
    this.layoutService.navigationClick.next(item);
  }
}