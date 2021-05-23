import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AccountModel, ChartInfoModel, ClientModel } from 'src/app/shared/Models';
import { BankAccountsService } from '../../services/bank-accounts.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardComponent implements OnInit {
  public accountDataSubject$: BehaviorSubject<AccountModel[]>
    = new BehaviorSubject<AccountModel[]>([]);
  public accountData$ = this.accountDataSubject$.asObservable();

  @Input() public clientData!: ClientModel;
  @ViewChild('clientAccountList') accountListTemplate!: TemplateRef<any>;
  public selectedChart!: ChartInfoModel;
  public displayedColumns: string[] = ['number', 'card_type', 'balance', 'created'];

  constructor(
    private bankAccountService: BankAccountsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.clientData && this.clientData.id) {
      this.accountData$ = this.bankAccountService.getClientAccounts(this.clientData.id);
    }
  }

  public setSelectedChart(event: any): void {
    this.selectedChart = event;
  }

  public openAccountListDialog(): void {
    this.dialog.open(this.accountListTemplate, {
      width: '500px'
    });
  }

}
