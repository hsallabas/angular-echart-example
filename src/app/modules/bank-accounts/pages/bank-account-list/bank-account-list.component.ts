import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';

import { BankAccountsService } from '../../services/bank-accounts.service';
import { SimpleStateService } from 'src/app/core/services/simple-state.service';
import { ClientModel } from 'src/app/shared/Models';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankAccountListComponent implements OnInit, OnDestroy {
  public searchValue$ = this.stateService.searchText$.pipe();
  public clientsData$ = combineLatest([
    this.bankAccountService.clients$,
    this.searchValue$
  ]).pipe(
    filter(([clientData, searchValue]) => clientData.length > 0),
    map(([clientData, searchValue]) => {
      if (searchValue) {
        return clientData.filter(x => x.firstname === searchValue);
      }
      return clientData;
    }),
  );

  private unsubscribe$ = new Subject<boolean>();

  constructor(
    private bankAccountService: BankAccountsService,
    private stateService: SimpleStateService
  ) { }

  ngOnInit(): void {
    this.bankAccountService.getClients().pipe(
      takeUntil(this.unsubscribe$),
      take(1),
      map((data: ClientModel[]) => this.bankAccountService.setClients(data))
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  public trackByFn(index: number, item: ClientModel): string {
    return item.id;
  }

  /**
   * Clear search
   */
  public removeSearch(): void {
    this.stateService.searchText$.next('');
  }

}
