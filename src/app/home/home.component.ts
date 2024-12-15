import { Component } from '@angular/core';
import {AccountStatementListComponent} from './account-statement-list/account-statement-list.component';
import {AddTransactionFormComponent} from './add-transaction-form/add-transaction-form.component';

@Component({
  selector: 'app-home',
  imports: [
    AccountStatementListComponent,
    AddTransactionFormComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
