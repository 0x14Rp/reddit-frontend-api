import { TestBed } from '@angular/core/testing';

import { VotedService } from './voted.service';

describe('VotedService', () => {
  let service: VotedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
