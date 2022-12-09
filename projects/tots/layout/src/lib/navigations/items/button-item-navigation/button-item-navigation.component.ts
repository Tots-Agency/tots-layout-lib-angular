import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-item-navigation',
  templateUrl: './button-item-navigation.component.html',
  styleUrls: ['./button-item-navigation.component.scss']
})
export class ButtonItemNavigationComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
