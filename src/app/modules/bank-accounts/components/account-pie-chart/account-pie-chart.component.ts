import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

import { AccountModel } from 'src/app/shared/Models';


@Component({
  selector: 'app-account-pie-chart',
  templateUrl: './account-pie-chart.component.html',
  styleUrls: ['./account-pie-chart.component.scss']
})
export class AccountPieChartComponent implements OnInit {
  @Input() public accountData: AccountModel[] = [];

  chartOption: EChartsOption = {
    series: [
      {
        name: 'Counters',
        radius: '50%',
        type: 'pie',
        data: [],
        label: {
          position: 'inside',
          formatter: '{b}: {d} %'
        },
      },
    ],
  };

  public mergeOption: any;

  constructor() { }

  ngOnInit(): void {
    this.setChartData();
  }

  /**
   * Set chart data
   */
  public setChartData(): void {
    const data = [
      { name: '>=0', value: 0},
      { name: '<0', value: 0},
    ];
    this.accountData.forEach((item) => {
      if (item.balance >= 0) {
        data[0].value = data[0].value + 1;
      } else {
        data[1].value = data[1].value + 1;
      }
    });
    this.mergeOption = {
      series: [{ data }]
    };
  }

  public selectAccountData($event: any): void {
    console.log($event);
  }

}
