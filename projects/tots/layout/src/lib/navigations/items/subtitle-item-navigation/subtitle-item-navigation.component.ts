import { Component, Input } from '@angular/core';

@Component({
  selector: 'tots-subtitle-item-navigation',
  templateUrl: './subtitle-item-navigation.component.html',
  styleUrls: ['./subtitle-item-navigation.component.scss']
})
export class SubtitleItemNavigationComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
