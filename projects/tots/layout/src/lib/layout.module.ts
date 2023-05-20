/** Angular Libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

/** Components */
import { SimpleFooterComponent } from './footers/simple-footer/simple-footer.component';
import { TotsBasicPageHeaderComponent } from './components/tots-basic-page-header/tots-basic-page-header.component';

/** Navigations */
import { TotsHorizontalNavigationComponent } from './navigations/tots-horizontal-navigation/tots-horizontal-navigation.component';

/** Layouts */
import { ModernLayoutComponent } from './layouts/modern-layout/modern-layout.component';
import { ImageItemNavigationComponent } from './navigations/items/image-item-navigation/image-item-navigation.component';
import { ButtonItemNavigationComponent } from './navigations/items/button-item-navigation/button-item-navigation.component';
import { UserItemNavigationComponent } from './navigations/items/user-item-navigation/user-item-navigation.component';
import { BaseItemNavigationComponent } from './navigations/items/base-item-navigation/base-item-navigation.component';
import { ModernTwoLayoutComponent } from './layouts/modern-two-layout/modern-two-layout.component';
import { TotsHorizontalTopbarComponent } from './navigations/tots-horizontal-topbar/tots-horizontal-topbar.component';
import { TotsHorizontalLinkBarComponent } from './navigations/tots-horizontal-link-bar/tots-horizontal-link-bar.component';
import { MultipleAccountsItemNavigationComponent } from './navigations/items/multiple-accounts-item-navigation/multiple-accounts-item-navigation.component';










@NgModule({
  declarations: [
    // Layouts
    ModernLayoutComponent,
    SimpleFooterComponent,
    TotsHorizontalNavigationComponent,
    ImageItemNavigationComponent,
    ButtonItemNavigationComponent,
    UserItemNavigationComponent,
    BaseItemNavigationComponent,
    TotsBasicPageHeaderComponent,
    ModernTwoLayoutComponent,
    TotsHorizontalTopbarComponent,
    TotsHorizontalLinkBarComponent,
    MultipleAccountsItemNavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,

    // Angular Material
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    // Components
    TotsBasicPageHeaderComponent,

    // Layouts
    ModernLayoutComponent
  ]
})
export class TotsLayoutModule { }
