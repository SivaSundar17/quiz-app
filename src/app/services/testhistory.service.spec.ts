import { TestBed } from '@angular/core/testing';

import { TesthistoryService } from './testhistory.service';

describe('TesthistoryService', () => {
  let service: TesthistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesthistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
