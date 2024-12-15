import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountStatement} from '../../model/account-statement';
import {AccountStatementService} from '../../service/account-statement.service';
import {MatTable, MatTableModule} from '@angular/material/table';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {AddTransactionFormComponent} from '../add-transaction-form/add-transaction-form.component';

@Component({
  selector: 'app-account-statement-list',
  imports: [
    MatTableModule,
    DatePipe,
    CurrencyPipe,
    AddTransactionFormComponent
  ],
  templateUrl: './account-statement-list.component.html',
  standalone: true,
  styleUrl: './account-statement-list.component.css'
})
export class AccountStatementListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'balance'];
  @ViewChild(MatTable) table!: MatTable<AccountStatement>;
  accountStatements: AccountStatement[] = [];

  constructor(private accountStatementService: AccountStatementService) {
  }

  ngOnInit(): void {
    this.loadAccountStatements();
  }

  onTransactionCompleted() {
    this.loadAccountStatements();
  }

  private loadAccountStatements() {
    this.accountStatementService.loadAll().subscribe(accountStatements => {
      this.accountStatements = accountStatements;
      this.table.renderRows();
    });
  }
}
