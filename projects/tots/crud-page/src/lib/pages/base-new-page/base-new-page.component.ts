import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TotsActionForm, TotsFieldForm, TotsFormComponent } from '@tots/form';
import { TotsBreadcrumbItem } from '@tots/layout';

@Component({
  selector: 'tots-base-new-page',
  templateUrl: './base-new-page.component.html',
  styleUrls: ['./base-new-page.component.scss']
})
export class TotsBaseNewPageComponent {

  @ViewChild('totsForm') totsForm!: TotsFormComponent;

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

  onClickSave() {
    let item = this.totsForm.updateItemByForm();
    this.formAction.emit({ key: 'submit', item: item });
  }

  onActionForm(action: TotsActionForm) {
    this.formAction?.emit(action);
  }
}
