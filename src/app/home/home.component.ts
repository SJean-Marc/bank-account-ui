import {Component} from '@angular/core';
import {AccountStatementListComponent} from './account-statement-list/account-statement-list.component';

@Component({
  selector: 'app-home',
  imports: [
    AccountStatementListComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
