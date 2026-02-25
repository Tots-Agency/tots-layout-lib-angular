import { Component, DestroyRef, OnInit } from '@angular/core';
import { TotsItemNavigation } from '../../entities/tots-item-navigation';
import { TotsLayoutService } from '../../services/tots-layout.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tots-horizontal-navigation',
  templateUrl: './tots-horizontal-navigation.component.html',
  styleUrls: ['./tots-horizontal-navigation.component.scss'],
  standalone: false
})
export class TotsHorizontalNavigationComponent implements OnInit {

  leftItems = new Array<TotsItemNavigation>();
  rightItems = new Array<TotsItemNavigation>();

  constructor(
    protected layoutService: TotsLayoutService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.layoutService.navigationItems.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => {
      this.leftItems = res.left;
      this.rightItems = res.right;
    });
  }
}
