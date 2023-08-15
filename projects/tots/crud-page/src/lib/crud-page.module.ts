import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/** Tots Libraries */
import { TotsLayoutModule } from '@tots/layout';
import { TotsTableModule } from '@tots/table';
import { TotsFilterBoxModule } from '@tots/filter-box';
import { TotsFormModule } from '@tots/form';

/** Pages */
import { TotsBaseCrudPageComponent } from './pages/base-crud-page/base-crud-page.component';
import { TotsBaseNewPageComponent } from './pages/base-new-page/base-new-page.component';





@NgModule({
  declarations: [
    /** Pages */
    TotsBaseCrudPageComponent,
    TotsBaseNewPageComponent
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
    MatButtonModule,
    MatIconModule,

    /** Tots Libraries */
    TotsLayoutModule,
    TotsTableModule,
    TotsFilterBoxModule,
    TotsFormModule
  ],
  exports: [
    /** Pages */
    TotsBaseCrudPageComponent,
    TotsBaseNewPageComponent
  ]
})
export class TotsCrudPageModule { }
