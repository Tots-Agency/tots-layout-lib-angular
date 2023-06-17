import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TotsBaseHttpService, TotsCoreConfig, TotsListResponse, TotsQuery, TOTS_CORE_PROVIDER } from '@tots/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService extends TotsBaseHttpService<any> {

  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient,
  ) {
    super(config, http);
    this.basePathUrl = '';
  }

  override list(query: TotsQuery): Observable<TotsListResponse<any>> {
    let response = new TotsListResponse<any>();
    response.data = [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
        { id: 4, name: 'Test 4' },
        { id: 5, name: 'Test 5' },
        { id: 6, name: 'Test 6' }
    ];
    return of(response);
  }
}
