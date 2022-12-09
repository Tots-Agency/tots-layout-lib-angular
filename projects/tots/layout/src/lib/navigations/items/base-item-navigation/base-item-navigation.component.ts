import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { TotsItemNavigation } from '../../../entities/tots-item-navigation';

@Component({
  selector: 'tots-base-item-navigation',
  templateUrl: './base-item-navigation.component.html',
  styleUrls: ['./base-item-navigation.component.scss']
})
export class BaseItemNavigationComponent implements OnInit {

  @Input() item!: TotsItemNavigation;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.item.component);
    (<any>view.instance).data = this.item.data;
  }

}
