import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TotsItemNavigation } from '../entities/tots-item-navigation';

@Injectable({
  providedIn: 'root'
})
export class TotsLayoutService {

  navigationItems = new BehaviorSubject<any>({});
  navigationClick = new Subject<{key: string}>();

  constructor() { }

  putNavigationHorizontal(left: Array<TotsItemNavigation>, right: Array<TotsItemNavigation>) {
    this.navigationItems.next({
      left: left,
      right: right
    });
  }
}
