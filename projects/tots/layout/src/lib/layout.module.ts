/** Angular Libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Layouts */
import { ModernLayoutComponent } from './layouts/modern-layout/modern-layout.component';




@NgModule({
  declarations: [
    // Layouts
    ModernLayoutComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    // Layouts
    ModernLayoutComponent
  ]
})
export class LayoutModule { }
