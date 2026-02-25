import { Component, Input } from '@angular/core';
import { TotsBreadcrumbItem } from '../../entities/tots-breadcrum-item';

@Component({
  selector: 'tots-breadcrumb',
  templateUrl: './tots-breadcrumb.component.html',
  styleUrls: ['./tots-breadcrumb.component.scss'],
  standalone: false
})
export class TotsBreadcrumbComponent {
  @Input() items: Array<TotsBreadcrumbItem> = [];
}
