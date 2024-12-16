import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AccountStatement} from '../model/account-statement';
import {AccountStatementClientService} from './account-statement-client.service';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementService {

  constructor(private accountStatementClient: AccountStatementClientService) {
  }

  loadAll(): Observable<AccountStatement[]> {
    return this.accountStatementClient.loadAll();
  }

  deposit(amount: number): Observable<any> {
    return this.accountStatementClient.deposit(amount);
  }

  withdraw(amount: number): Observable<any> {
    return this.accountStatementClient.withdraw(amount);
  }
}
