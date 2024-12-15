import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTransactionFormComponent} from './add-transaction-form.component';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

describe('AddTransactionFormComponent', () => {
  let component: AddTransactionFormComponent;
  let fixture: ComponentFixture<AddTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransactionFormComponent],
      providers: [provideHttpClient(), importProvidersFrom(BrowserAnimationsModule, BrowserModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
