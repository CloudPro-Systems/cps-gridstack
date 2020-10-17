import { TestBed } from '@angular/core/testing';

import { GridstackService } from './gridstack.service';

describe('GridstackService', () => {
  let service: GridstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
