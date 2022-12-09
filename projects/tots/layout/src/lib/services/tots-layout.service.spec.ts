import { TestBed } from '@angular/core/testing';

import { TotsLayoutService } from './tots-layout.service';

describe('TotsLayoutService', () => {
  let service: TotsLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
