import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AccountStatement} from '../model/account-statement';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementService {

  constructor() { }

  getAll() : Observable<AccountStatement[]> {
    return of([new AccountStatement(new Date(2010, 1, 1), 10, 100)]);
  }
}
