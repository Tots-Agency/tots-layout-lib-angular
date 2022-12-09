import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tots-basic-page-header',
  templateUrl: './tots-basic-page-header.component.html',
  styleUrls: ['./tots-basic-page-header.component.scss']
})
export class TotsBasicPageHeaderComponent implements OnInit {

  @Input() title?: string = '';
  @Input() subtitle?: string;

  @Input() buttonName?: string;
  @Input() buttonIcon?: string;

  @Output() clickButton = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickButton.emit();
  }
}
