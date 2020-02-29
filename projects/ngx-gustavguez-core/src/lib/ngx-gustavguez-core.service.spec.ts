import { TestBed } from '@angular/core/testing';

import { NgxGustavguezCoreService } from './ngx-gustavguez-core.service';

describe('NgxGustavguezCoreService', () => {
  let service: NgxGustavguezCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGustavguezCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
