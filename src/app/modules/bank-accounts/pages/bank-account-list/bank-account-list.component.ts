import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { ClientModel } from 'src/app/shared/Models';

import { BankAccountsService } from '../../services/bank-accounts.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss']
})
export class BankAccountListComponent implements OnInit {
  public clientsData$ = this.bankAccountService.clients$.pipe(
    filter((data) => data.length > 0),
  );
  private unsubscribe$ = new Subject<boolean>();

  constructor(private bankAccountService: BankAccountsService) { }

  ngOnInit(): void {
    this.bankAccountService.getClients().pipe(
      takeUntil(this.unsubscribe$),
      take(1),
      map((data: ClientModel[]) => this.bankAccountService.setClients(data))
    ).subscribe();
  }

  trackByFn(index: number, item: ClientModel): string {
    return item.id;
  }

}
