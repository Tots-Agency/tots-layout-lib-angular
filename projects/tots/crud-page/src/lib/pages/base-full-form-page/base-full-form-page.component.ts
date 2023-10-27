import { Component, Inject, Input } from '@angular/core';
import { TotsBaseNewPageComponent } from '../base-new-page/base-new-page.component';
import { TotsActionForm } from '@tots/form';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, switchMap, takeWhile, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TOTS_CORE_PROVIDER, TotsCoreConfig } from '@tots/core';

@Component({
  selector: 'tots-full-form-page',
  templateUrl: './base-full-form-page.component.html',
  styleUrls: ['./base-full-form-page.component.css']
})
export class TotsFullFormPageComponent extends TotsBaseNewPageComponent {

  @Input() basePathAPI?: string = '';
  @Input() successPath?: string = '';

  isLoading = false;

  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected config: TotsCoreConfig,
    protected route: ActivatedRoute,
    protected router: Router,
    protected http: HttpClient,
    protected snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadParams();
  }

  onCreate(item: any) {
    this.http.post(`${this.config.baseUrl}${this.basePathAPI}`, item)
    .pipe(catchError(error => {
      this.snackBar.open(error?.error?.message ?? 'An unexpected error occurred and we were unable to process the request. Please try again', undefined, { duration: 30000, panelClass: 'snackbar_error' })
      throw error;
    }))
    .pipe(tap(item => this.snackBar.open('Has been successfully created', undefined, { duration: 3000, panelClass: 'snackbar_success' })))
    .subscribe(response => this.router.navigateByUrl(this.successPath ?? '/'));
  }

  onUpdate(item: any) {
    this.http.put(`${this.config.baseUrl}${this.basePathAPI}`, item)
    .pipe(catchError(error => {
      this.snackBar.open(error?.error?.message ?? 'An unexpected error occurred and we were unable to process the request. Please try again', undefined, { duration: 30000, panelClass: 'snackbar_error' })
      throw error;
    }))
    .pipe(tap(item => this.snackBar.open('The changes have been saved correctly', undefined, { duration: 3000, panelClass: 'snackbar_success' })))
    .subscribe(response => this.router.navigateByUrl(this.successPath ?? '/'));
  }

  onSave(item: any) {
    if(item.id == undefined){
      return this.onCreate(item);
    }

    this.onUpdate(item);
  }

  onFormAction(action: TotsActionForm) {
    if(action.key == 'submit'){
      this.onSave(action.item);
    } else {
      this.formAction.emit(action);
    }
  }

  loadParams() {
    this.route.params
    .pipe(takeWhile(params => params['id'] != undefined))
    .pipe(map(params => params['id']))
    .pipe(tap(itemId => this.isLoading = true))
    .pipe(switchMap(itemId => this.http.get(`${this.config.baseUrl}${this.basePathAPI}/${itemId}`)))
    .pipe(tap(item => this.item = item))
    .pipe(tap(item => this.isLoading = false))
    .subscribe();
  }
}
