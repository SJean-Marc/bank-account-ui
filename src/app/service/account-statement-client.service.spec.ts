import { TestBed } from '@angular/core/testing';

import { AccountStatementClientService } from './account-statement-client.service';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

describe('AccountStatementClientService', () => {
  let service: AccountStatementClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), importProvidersFrom(BrowserAnimationsModule, BrowserModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule)]
    });
    service = TestBed.inject(AccountStatementClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
