import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tots-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss']
})
export class SimpleFooterComponent implements OnInit {

  @Input() text?: string|undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
