import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

import { AccountModel } from 'src/app/shared/Models';


@Component({
  selector: 'app-account-bar-chart',
  templateUrl: './account-bar-chart.component.html',
  styleUrls: ['./account-bar-chart.component.scss']
})
export class AccountBarChartComponent implements OnInit {
  @Input() public accountData: AccountModel[] = [];

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
    this.setChartData();
  }


  public setChartData(): void {
    let data: any = [];
    let labels: any = [];
    this.accountData.forEach((account) => {
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

}
