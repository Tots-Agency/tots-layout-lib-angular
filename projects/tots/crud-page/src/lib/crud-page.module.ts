import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/** Tots Libraries */
import { TotsLayoutModule } from '@tots/layout';
import { TotsTableModule } from '@tots/table';
import { TotsFilterBoxModule } from '@tots/filter-box';

/** Pages */
import { TotsBaseCrudPageComponent } from './pages/base-crud-page/base-crud-page.component';







@NgModule({
  declarations: [
    /** Pages */
    TotsBaseCrudPageComponent
  ],
  imports: [
    /** Angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** Angular Material */
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,

    /** Tots Libraries */
    TotsLayoutModule,
    TotsTableModule,
    TotsFilterBoxModule
  ],
  exports: [
    /** Pages */
    TotsBaseCrudPageComponent
  ]
})
export class TotsCrudPageModule { }
