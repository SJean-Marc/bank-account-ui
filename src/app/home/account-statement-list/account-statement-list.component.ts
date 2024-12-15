import {Component, OnInit} from '@angular/core';
import {AccountStatement} from '../../model/account-statement';
import {Observable} from 'rxjs';
import {AccountStatementService} from '../../service/account-statement.service';
import {MatTableModule} from '@angular/material/table';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-account-statement-list',
  imports: [
    MatTableModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './account-statement-list.component.html',
  standalone: true,
  styleUrl: './account-statement-list.component.css'
})
export class AccountStatementListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'balance'];
  accountStatements$!: Observable<AccountStatement[]>;

  constructor(private accountStatementService: AccountStatementService) {
  }

  ngOnInit(): void {
    this.accountStatements$ = this.accountStatementService.loadAll();
  }
}
