import { TestBed } from '@angular/core/testing';

import { TransmissorApiService } from './transmissor-api.service';

describe('TransmissorApiService', () => {
  let service: TransmissorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
