import { TestBed } from '@angular/core/testing';

import { AccountStatementClientService } from './account-statement-client.service';

describe('AccountStatementClientService', () => {
  let service: AccountStatementClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatementClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
