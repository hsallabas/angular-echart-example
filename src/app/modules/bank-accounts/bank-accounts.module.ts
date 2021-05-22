import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountListComponent } from './pages/bank-account-list/bank-account-list.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankAccountsService } from './services/bank-accounts.service';
import { AccountBarChartComponent } from './components/account-bar-chart/account-bar-chart.component';
import { AccountPieChartComponent } from './components/account-pie-chart/account-pie-chart.component';

@NgModule({
  declarations: [
    BankAccountListComponent,
    ClientCardComponent,
    AccountBarChartComponent,
    AccountPieChartComponent
  ],
  imports: [
    CommonModule,
    BankAccountsRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxChartsModule
  ],
  providers: [
    BankAccountsService
  ]
})
export class BankAccountsModule { }
