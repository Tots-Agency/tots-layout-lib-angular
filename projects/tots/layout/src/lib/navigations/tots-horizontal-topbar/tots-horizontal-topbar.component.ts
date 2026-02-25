import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { TotsBaseLayoutConfig } from '../../entities/tots-base-layout-config';
import { TotsItemNavigation } from '../../entities/tots-item-navigation';
import { TotsLayoutService } from '../../services/tots-layout.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tots-horizontal-topbar',
  templateUrl: './tots-horizontal-topbar.component.html',
  styleUrls: ['./tots-horizontal-topbar.component.scss'],
  standalone: false
})
export class TotsHorizontalTopbarComponent implements OnInit {

  @Input() config?: TotsBaseLayoutConfig;

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
