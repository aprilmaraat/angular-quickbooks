import { TestBed } from '@angular/core/testing';

import { QuickbooksOnlineService } from './quickbooks-online.service';

describe('QuickbooksOnlineService', () => {
  let service: QuickbooksOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickbooksOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
