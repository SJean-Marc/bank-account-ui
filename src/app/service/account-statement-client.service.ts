import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, Observable, throwError} from 'rxjs';
import {AccountStatement} from '../model/account-statement';

export class AccountStatementResponse {
  date: Date;
  amount: number;
  balance: number;

  constructor(date: Date, amount: number, balance: number) {
    this.date = date;
    this.amount = amount;
    this.balance = balance;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountStatementClientService {

  constructor(private http: HttpClient) {
  }

  loadAll() {
    return this.http.get<AccountStatementResponse[]>(`${environment.apiUrl}/account-statements`)
      .pipe(
        map(accountStatementsReponses => {
            return accountStatementsReponses.map((accountStatementResponse) => {
              return new AccountStatement(accountStatementResponse.date,
                accountStatementResponse.amount,
                accountStatementResponse.balance);
            });
          }
        )
      )
  }

  deposit(moneyToDeposit: number) : Observable<any> {
    return this.http.post(`${environment.apiUrl}/deposit`, {amount: moneyToDeposit})
      .pipe(
        catchError(error => {
          return throwError(() => new Error('Deposit failed: ' + error.message));
        })
      );
  }

  withdraw(moneyToWithdraw: number) : Observable<any> {
    return this.http.post(`${environment.apiUrl}/withdraw`, {amount: moneyToWithdraw})
      .pipe(
        catchError(error => {
          return throwError(() => new Error('Withdraw failed: ' + error.message));
        })
      );
  }
}
