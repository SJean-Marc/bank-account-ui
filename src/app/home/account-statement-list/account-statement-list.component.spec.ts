import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountStatementListComponent} from './account-statement-list.component';
import {AccountStatementService} from '../../service/account-statement.service';
import {of} from 'rxjs';
import {AccountStatement} from '../../model/account-statement';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

describe('AccountStatementListComponent', () => {
  let accountStatementService: AccountStatementService;
  let component: AccountStatementListComponent;
  let fixture: ComponentFixture<AccountStatementListComponent>;

  beforeEach(async () => {
    const spyAccountStatementGetAll = jasmine.createSpyObj('AccountStatementService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [AccountStatementListComponent],
      providers: [{provide: AccountStatementService, useValue: spyAccountStatementGetAll},
        provideHttpClient(), importProvidersFrom(BrowserAnimationsModule, BrowserModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule)]

    })
      .compileComponents();

    accountStatementService = TestBed.inject(AccountStatementService);

    (accountStatementService.loadAll as jasmine.Spy).and.returnValue(of([
      {date: new Date(2020, 10, 1), amount: 10, balance: 10},
      {date: new Date(2021, 10, 1), amount: 20, balance: 30}
    ]));

    fixture = TestBed.createComponent(AccountStatementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print table when has values', () => {
    expect(component.accountStatements$).toBeDefined();
    component.accountStatements$.subscribe((accountStatements: AccountStatement[]) => {
      expect(accountStatements).toContain({date: new Date(2020, 10, 1), amount: 10, balance: 10});
    })
  })
});
