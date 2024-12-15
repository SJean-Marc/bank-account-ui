import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs';
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

  deposit(moneyToDeposit) {
    this.http.post('/deposit', { amount: this.transactionForm.value.amount }).
  }
}
