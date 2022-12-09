/** Angular Libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Layouts */
import { ModernLayoutComponent } from './layouts/modern-layout/modern-layout.component';
import { SimpleFooterComponent } from './footers/simple-footer/simple-footer.component';




@NgModule({
  declarations: [
    // Layouts
    ModernLayoutComponent,
    SimpleFooterComponent
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
