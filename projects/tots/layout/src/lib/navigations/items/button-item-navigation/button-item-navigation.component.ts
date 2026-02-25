import { Component, Input } from '@angular/core';

@Component({
  selector: 'tots-button-item-navigation',
  templateUrl: './button-item-navigation.component.html',
  styleUrls: ['./button-item-navigation.component.scss'],
  standalone: false
})
export class ButtonItemNavigationComponent {

  @Input() data: any;

}
