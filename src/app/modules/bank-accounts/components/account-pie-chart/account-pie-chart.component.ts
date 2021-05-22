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
        data: [
          { value: 3, name: '>=0' },
          { value: 2, name: '<0' },
        ],
        label: {
          position: 'inside'
        }
      },
    ],
  };

  public mergeOption: any;

  constructor() { }

  ngOnInit(): void {
  }

}
