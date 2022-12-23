import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tots-image-item-navigation',
  templateUrl: './image-item-navigation.component.html',
  styleUrls: ['./image-item-navigation.component.scss']
})
export class ImageItemNavigationComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
