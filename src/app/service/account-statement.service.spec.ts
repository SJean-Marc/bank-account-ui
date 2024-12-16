import {TestBed} from '@angular/core/testing';

import {AccountStatementService} from './account-statement.service';
import {AccountStatement} from '../model/account-statement';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {of, throwError} from 'rxjs';
import {AccountStatementClientService} from './account-statement-client.service';

describe('AccountStatementService', () => {
  let service: AccountStatementService;
  let accountStatementClientService: jasmine.SpyObj<AccountStatementClientService>;

  beforeEach(() => {
    const spyAccountStatementClientService = jasmine.createSpyObj('AccountStatementClientService', ['loadAll', 'deposit', 'withdraw']);

    TestBed.configureTestingModule({
      providers: [
        AccountStatementService,
        {provide: AccountStatementClientService, useValue: spyAccountStatementClientService}
      ]
    });

    service = TestBed.inject(AccountStatementService);
    accountStatementClientService = TestBed.inject(AccountStatementClientService) as jasmine.SpyObj<AccountStatementClientService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return account statements', (done: DoneFn) => {
    const expectedStatements: AccountStatement[] = [
      new AccountStatement(new Date(2020, 10, 1), 10, 100),
      new AccountStatement(new Date(2021, 10, 1), 20, 120)
    ];

    accountStatementClientService.loadAll.and.returnValue(of(expectedStatements));

    service.loadAll().subscribe({
      next: accountStatements => {
        expect(accountStatements).toEqual(expectedStatements);
        done();
      },
      error: done.fail
    });
  });

  it('should deposit successfully', (done: DoneFn) => {
    accountStatementClientService.deposit.and.returnValue(of({}));

    service.deposit(100).subscribe({
      next: response => {
        expect(response).toEqual({});
        expect(accountStatementClientService.deposit).toHaveBeenCalledWith(100);
        done();
      },
      error: done.fail
    });
  });

  it('should handle deposit error', (done: DoneFn) => {
    const errorResponse = new Error('Deposit failed');
    accountStatementClientService.deposit.and.returnValue(throwError(() => errorResponse));

    service.deposit(100).subscribe({
      next: () => done.fail('expected an error, not a response'),
      error: error => {
        expect(error).toBe(errorResponse);
        done();
      }
    });
  });

  it('should withdraw successfully', (done: DoneFn) => {
    accountStatementClientService.withdraw.and.returnValue(of({}));

    service.withdraw(50).subscribe({
      next: response => {
        expect(response).toEqual({});
        expect(accountStatementClientService.withdraw).toHaveBeenCalledWith(50);
        done();
      },
      error: done.fail
    });
  });

  it('should handle withdraw error', (done: DoneFn) => {
    const errorResponse = new Error('Withdraw failed');
    accountStatementClientService.withdraw.and.returnValue(throwError(() => errorResponse));

    service.withdraw(50).subscribe({
      next: () => done.fail('expected an error, not a response'),
      error: error => {
        expect(error).toBe(errorResponse);
        done();
      }
    });
  });
});
