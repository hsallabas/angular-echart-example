import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AccountModel, ClientModel } from 'src/app/shared/Models';
import { BankAccountsService } from '../../services/bank-accounts.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() public clientData: ClientModel | undefined;
  public accountDataSubject$: BehaviorSubject<AccountModel[]>
    = new BehaviorSubject<AccountModel[]>([]);
  public accountData$ = this.accountDataSubject$.asObservable();

  constructor(private bankAccountService: BankAccountsService) { }

  ngOnInit(): void {
    if (this.clientData && this.clientData.id) {
      this.accountData$ = this.bankAccountService.getClientAccounts(this.clientData.id);
    }
  }

}
