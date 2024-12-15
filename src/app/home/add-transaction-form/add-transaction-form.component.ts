import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountStatementService} from '../../service/account-statement.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-transaction-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButton
  ],
  templateUrl: './add-transaction-form.component.html',
  standalone: true,
  styleUrl: './add-transaction-form.component.css'
})
export class AddTransactionFormComponent {
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private accountStatementService: AccountStatementService) {
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  deposit() {

  }

  withdraw() {

  }
}
