import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountStatementListComponent} from './account-statement-list.component';
import {AccountStatementService} from '../../service/account-statement.service';
import {of} from 'rxjs';
import {AccountStatement} from '../../model/account-statement';

describe('AccountStatementListComponent', () => {
  let accountStatementService: AccountStatementService;
  let component: AccountStatementListComponent;
  let fixture: ComponentFixture<AccountStatementListComponent>;

  beforeEach(async () => {
    const spyAccountStatementGetAll = jasmine.createSpyObj('AccountStatementService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [AccountStatementListComponent],
      providers: [{provide: AccountStatementService, useValue: spyAccountStatementGetAll}]
    })
      .compileComponents();

    accountStatementService = TestBed.inject(AccountStatementService);

    (accountStatementService.getAll as jasmine.Spy).and.returnValue(of([
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
