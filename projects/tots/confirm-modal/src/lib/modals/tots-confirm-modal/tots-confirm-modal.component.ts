import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TotsConfirmModalConfig } from '../../entities/tots-confirm-modal-config';

@Component({
  selector: 'tots-confirm-modal',
  templateUrl: './tots-confirm-modal.component.html',
  styleUrls: ['./tots-confirm-modal.component.scss']
})
export class TotsConfirmModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TotsConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: TotsConfirmModalConfig,
  ) { }

  ngOnInit(): void {
  }

  onClick(value: any) {
    this.dialogRef.close(value);
  }
}
