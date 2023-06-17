import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TotsLayoutModule } from 'projects/tots/layout/src/public-api';
import { TestCrudComponent } from './pages/test-crud/test-crud.component';
import { TotsCrudPageModule } from 'projects/tots/crud-page/src/public-api';
import { TotsCoreModule } from '@tots/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TotsCoreModule,
    TotsLayoutModule,
    TotsCrudPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
