import { Component, Input } from '@angular/core';

@Component({
  selector: 'tots-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss'],
  standalone: false
})
export class SimpleFooterComponent {

  @Input() text?: string | undefined = '';

}
