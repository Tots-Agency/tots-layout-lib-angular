/** Angular Libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatIconModule } from '@angular/material/icon';

/** Components */
import { SimpleFooterComponent } from './footers/simple-footer/simple-footer.component';

/** Navigations */
import { TotsHorizontalNavigationComponent } from './navigations/tots-horizontal-navigation/tots-horizontal-navigation.component';

/** Layouts */
import { ModernLayoutComponent } from './layouts/modern-layout/modern-layout.component';
import { ImageItemNavigationComponent } from './navigations/items/image-item-navigation/image-item-navigation.component';
import { ButtonItemNavigationComponent } from './navigations/items/button-item-navigation/button-item-navigation.component';
import { UserItemNavigationComponent } from './navigations/items/user-item-navigation/user-item-navigation.component';
import { BaseItemNavigationComponent } from './navigations/items/base-item-navigation/base-item-navigation.component';









@NgModule({
  declarations: [
    // Layouts
    ModernLayoutComponent,
    SimpleFooterComponent,
    TotsHorizontalNavigationComponent,
    ImageItemNavigationComponent,
    ButtonItemNavigationComponent,
    UserItemNavigationComponent,
    BaseItemNavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,

    // Angular Material
    MatIconModule,
  ],
  exports: [
    // Layouts
    ModernLayoutComponent
  ]
})
export class LayoutModule { }
