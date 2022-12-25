import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';

/** Modals */
import { TotsConfirmModalComponent } from './modals/tots-confirm-modal/tots-confirm-modal.component';


@NgModule({
  declarations: [
    TotsConfirmModalComponent
  ],
  imports: [
    CommonModule,
    // Angular Material
    MatDialogModule
  ],
  exports: [
    TotsConfirmModalComponent
  ]
})
export class ConfirmModalModule { }
