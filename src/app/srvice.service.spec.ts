import { TestBed } from '@angular/core/testing';

import { SrviceService } from './srvice.service';

describe('SrviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrviceService = TestBed.get(SrviceService);
    expect(service).toBeTruthy();
  });
});
