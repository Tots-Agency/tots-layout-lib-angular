import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotsActionForm, TotsFieldForm } from '@tots/form';
import { TotsBreadcrumbItem } from '@tots/layout';

@Component({
  selector: 'tots-base-new-page',
  templateUrl: './base-new-page.component.html',
  styleUrls: ['./base-new-page.component.scss']
})
export class TotsBaseNewPageComponent {

  @Input() breadcrumb?: Array<TotsBreadcrumbItem>;

  @Input() title?: string = '';
  @Input() subtitle?: string;
  @Input() buttonName?: string;
  @Input() buttonIcon?: string;
  @Output() clickButton = new EventEmitter<any>();

  @Input() formClasses?: string;
  @Input() fields = new Array<TotsFieldForm>();
  @Input() item: any;
  @Output() formAction = new EventEmitter<TotsActionForm>();

  constructor() { }

  onClickButton() {
    this.clickButton.emit();
  }

  onActionForm(action: TotsActionForm) {
    this.formAction?.emit(action);
  }
}
