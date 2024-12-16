import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTransactionFormComponent} from './add-transaction-form.component';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AccountStatementService} from '../../service/account-statement.service';
import {of, throwError} from 'rxjs';

describe('AddTransactionFormComponent', () => {
  let component: AddTransactionFormComponent;
  let fixture: ComponentFixture<AddTransactionFormComponent>;
  let accountStatementService: jasmine.SpyObj<AccountStatementService>;

  // let accountStatementService: AccountStatementService;

  beforeEach(async () => {
    const spyAccountStatementService = jasmine.createSpyObj('AccountStatementService', ['deposit', 'withdraw']);

    await TestBed.configureTestingModule({
      imports: [AddTransactionFormComponent],
      providers: [
        { provide: AccountStatementService, useValue: spyAccountStatementService },
        provideHttpClient(),
        importProvidersFrom(BrowserAnimationsModule,
          BrowserModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransactionFormComponent);
    accountStatementService = TestBed.inject(AccountStatementService) as jasmine.SpyObj<AccountStatementService>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deposit successfully', () => {
    accountStatementService.deposit.and.returnValue(of({}));

    component.transactionForm.setValue({ amount: 100 });
    component.deposit();

    expect(accountStatementService.deposit).toHaveBeenCalledWith(100);
    expect(component.errorMessage).toBeNull();
  });

  it('should handle deposit error', () => {
    const errorResponse = new Error('Deposit failed');
    accountStatementService.deposit.and.returnValue(throwError(() => errorResponse));

    component.transactionForm.setValue({ amount: 100 });
    component.deposit();

    expect(accountStatementService.deposit).toHaveBeenCalledWith(100);
    expect(component.errorMessage).toBe('Deposit failed');
  });

  it('should withdraw successfully', () => {
    accountStatementService.withdraw.and.returnValue(of({}));

    component.transactionForm.setValue({ amount: 50 });
    component.withdraw();

    expect(accountStatementService.withdraw).toHaveBeenCalledWith(50);
    expect(component.errorMessage).toBeNull();
  });

  it('should handle withdraw error', () => {
    const errorResponse = new Error('Withdraw failed');
    accountStatementService.withdraw.and.returnValue(throwError(() => errorResponse));

    component.transactionForm.setValue({ amount: 50 });
    component.withdraw();

    expect(accountStatementService.withdraw).toHaveBeenCalledWith(50);
    expect(component.errorMessage).toBe('Withdraw failed');
  });
});
