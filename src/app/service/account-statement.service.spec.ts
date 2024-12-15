import { TestBed } from '@angular/core/testing';

import { AccountStatementService } from './account-statement.service';
import {AccountStatement} from '../model/account-statement';

describe('AccountStatementService', () => {
  let service: AccountStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return account statement', () => {
    service.loadAll().subscribe(accountStatements => {
      expect(accountStatements).toEqual([new AccountStatement(new Date(2010, 1, 1), 10, 100)]);
    })
  })
});
