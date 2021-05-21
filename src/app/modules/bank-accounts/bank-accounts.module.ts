import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountListComponent } from './pages/bank-account-list/bank-account-list.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankAccountsService } from './services/bank-accounts.service';

@NgModule({
  declarations: [
    BankAccountListComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule,
    BankAccountsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    BankAccountsService
  ]
})
export class BankAccountsModule { }
