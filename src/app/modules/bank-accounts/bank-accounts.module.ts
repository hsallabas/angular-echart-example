import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountListComponent } from './pages/bank-account-list/bank-account-list.component';


@NgModule({
  declarations: [
    BankAccountListComponent
  ],
  imports: [
    CommonModule,
    BankAccountsRoutingModule
  ]
})
export class BankAccountsModule { }
