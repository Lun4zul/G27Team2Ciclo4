import { TestBed } from '@angular/core/testing';

import { LeerService } from './leer.service';

describe('LeerService', () => {
  let service: LeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
