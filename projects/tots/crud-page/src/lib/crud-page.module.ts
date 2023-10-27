import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


/** Tots Libraries */
import { TotsCoreModule } from '@tots/core';
import { TotsLayoutModule } from '@tots/layout';
import { TotsTableModule } from '@tots/table';
import { TotsFilterBoxModule } from '@tots/filter-box';
import { TotsFormModule } from '@tots/form';

/** Pages */
import { TotsBaseCrudPageComponent } from './pages/base-crud-page/base-crud-page.component';
import { TotsBaseNewPageComponent } from './pages/base-new-page/base-new-page.component';
import { TotsFullFormPageComponent } from './pages/base-full-form-page/base-full-form-page.component';






@NgModule({
  declarations: [
    /** Pages */
    TotsBaseCrudPageComponent,
    TotsBaseNewPageComponent,
    TotsFullFormPageComponent
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
    MatSnackBarModule,

    /** Tots Libraries */
    TotsCoreModule,
    TotsLayoutModule,
    TotsTableModule,
    TotsFilterBoxModule,
    TotsFormModule
  ],
  exports: [
    /** Pages */
    TotsBaseCrudPageComponent,
    TotsBaseNewPageComponent,
    TotsFullFormPageComponent
  ]
})
export class TotsCrudPageModule { }
