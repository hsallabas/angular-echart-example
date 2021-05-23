import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

import { AccountModel, ChartInfoModel } from 'src/app/shared/Models';

interface CardTypeModel {
  name: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-account-bar-chart',
  templateUrl: './account-bar-chart.component.html',
  styleUrls: ['./account-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBarChartComponent implements OnInit, OnChanges {
  @Input() public accountData: AccountModel[] = [];
  @Input() public selectedChart: ChartInfoModel | undefined;
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
        name: '>=0',
        type: 'bar',
        barMaxWidth: 50,
        data: [],
      },
      {
        name: '<0',
        type: 'bar',
        barMaxWidth: 50,
        data: [],
      },
    ],
    color: ['#5470c6', '#ee6666']
  };
  public mergeOption: any;

  constructor() { }

  ngOnInit(): void {
    this.setChartData(this.accountData);
    this.findCardTypes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedChart) {
      this.selectChartSeries();
    }
  }

  /**
   * Set chart data
   * @param accountList Client account list
   */
  public setChartData(accountList: AccountModel[]): void {
    let dataPositive: number[] = [];
    let dataNegative: number[] = [];
    let labels: number[] = [];
    accountList.forEach((account) => {
      account.balance >= 0 ? dataPositive.push(account.balance) : dataNegative.push(account.balance);
      labels.push(account.number);
    });
    this.mergeOption = {
      xAxis: {
        data: labels,
      },
      series: [
        { data: dataPositive },
        { data: dataNegative },
      ]
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
    let filteredAccounts: AccountModel[] = [];
    this.cardTypes.forEach((item) => {
      if (item.isChecked === true) {
        filteredAccounts.push(...this.accountData.filter(x => x.card_type === item.name));
      }
    });
    this.setChartData(filteredAccounts);
  }

  /**
   * Select specific bar(s)
   */
  public selectChartSeries(): void {
    let series: any = [
      { itemStyle: null },
      { itemStyle: null },
    ];
    if (this.selectedChart) {
      if (this.selectedChart.selected) {
        series[this.selectedChart.dataIndex].itemStyle = {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        };
      }
      this.mergeOption = { series };
    }
  }

  trackByFn(index: number): number {
    return index;
  }

}
