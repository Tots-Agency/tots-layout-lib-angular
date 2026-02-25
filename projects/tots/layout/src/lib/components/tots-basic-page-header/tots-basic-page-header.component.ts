import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tots-basic-page-header',
  templateUrl: './tots-basic-page-header.component.html',
  styleUrls: ['./tots-basic-page-header.component.scss'],
  standalone: false
})
export class TotsBasicPageHeaderComponent {

  @Input() title?: string = '';
  @Input() subtitle?: string;

  @Input() buttonName?: string;
  @Input() buttonIcon?: string;

  @Output() clickButton = new EventEmitter<any>();

  onClick() {
    this.clickButton.emit();
  }
}
