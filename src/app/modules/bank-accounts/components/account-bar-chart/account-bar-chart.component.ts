import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

import { AccountModel } from 'src/app/shared/Models';

interface CardTypeModel {
  name: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-account-bar-chart',
  templateUrl: './account-bar-chart.component.html',
  styleUrls: ['./account-bar-chart.component.scss']
})
export class AccountBarChartComponent implements OnInit {
  @Input() public accountData: AccountModel[] = [];
  public cardTypes: CardTypeModel[] = [];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barMaxWidth: 50,
        data: [],
      },
    ],
  };
  public mergeOption: any;

  constructor() { }

  ngOnInit(): void {
    this.setChartData(this.accountData);
    this.findCardTypes();
  }

/**
 * Set chart data
 * @param accountList Client account list
 */
  public setChartData(accountList: AccountModel[]): void {
    let data: any = [];
    let labels: any = [];
    accountList.forEach((account) => {
      data.push(account.balance);
      labels.push(account.number);
    });
    this.mergeOption = {
      xAxis: {
        data: labels,
      },
      series: [{ data }]
    };
  }

/**
 * Find Unique card type
 */
  public findCardTypes(): void {
    this.cardTypes = this.accountData.reduce((acc: CardTypeModel[], curr) => {
      if (acc.findIndex(x => x.name === curr.card_type) === -1) {
        acc.push({ name: curr.card_type, isChecked: true });
      }
      return acc;
    }, []);
  }

/**
 * Filter chart data
 * @param index card type index
 * @param $event checkbox event
 */
  public filter(index: number, $event: any): void {
    this.cardTypes[index].isChecked = $event.checked;
    let filteredAccounts: any = [];
    this.cardTypes.forEach((item) => {
      if (item.isChecked === true) {
        filteredAccounts.push(...this.accountData.filter(x => x.card_type === item.name));
      }
    });
    this.setChartData(filteredAccounts);
  }

}
