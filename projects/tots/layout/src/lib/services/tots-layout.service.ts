import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TotsItemNavigation } from '../entities/tots-item-navigation';
import { TotsLinkItem } from '../entities/tots-link-item';

@Injectable({
  providedIn: 'root'
})
export class TotsLayoutService {

  navigationItems = new BehaviorSubject<any>({});
  navigationClick = new Subject<{key: string}>();

  linkItems = new BehaviorSubject<Array<TotsLinkItem>>([]);

  constructor() { }

  putNavigationLinks(items: Array<TotsLinkItem>){
    this.linkItems.next(items);
  }

  putNavigationHorizontal(left: Array<TotsItemNavigation>, right: Array<TotsItemNavigation>) {
    this.navigationItems.next({
      left: left,
      right: right
    });
  }

  putNavigationSidebar(left: Array<TotsItemNavigation>) {
    this.navigationItems.next({
      left: left
    });
  }
}
