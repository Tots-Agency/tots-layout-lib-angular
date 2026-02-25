import { Component, DestroyRef, OnInit } from '@angular/core';
import { TotsLinkItem } from '../../entities/tots-link-item';
import { TotsLayoutService } from '../../services/tots-layout.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tots-horizontal-link-bar',
  templateUrl: './tots-horizontal-link-bar.component.html',
  styleUrls: ['./tots-horizontal-link-bar.component.scss'],
  standalone: false
})
export class TotsHorizontalLinkBarComponent implements OnInit {
  navigation = new Array<TotsLinkItem>();

  constructor(
    protected layoutService: TotsLayoutService,
    private destroyRef:DestroyRef
  ) { }

  ngOnInit() {
    this.loadConfig();
  }

  loadConfig() {
    this.layoutService.linkItems.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => this.navigation = res);
  }
}
