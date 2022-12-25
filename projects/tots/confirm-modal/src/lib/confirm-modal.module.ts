import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/** Modals */
import { TotsConfirmModalComponent } from './modals/tots-confirm-modal/tots-confirm-modal.component';


@NgModule({
  declarations: [
    TotsConfirmModalComponent
  ],
  imports: [
    CommonModule,
    // Angular Material
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    TotsConfirmModalComponent
  ]
})
export class TotsConfirmModalModule { }
