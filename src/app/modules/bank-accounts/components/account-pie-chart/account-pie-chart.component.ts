import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EChartsOption } from 'echarts';

import { AccountModel, ChartInfoModel } from 'src/app/shared/Models';

@Component({
  selector: 'app-account-pie-chart',
  templateUrl: './account-pie-chart.component.html',
  styleUrls: ['./account-pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPieChartComponent implements OnInit {
  @Input() public accountData: AccountModel[] = [];
  @Output() public selectedChart: EventEmitter<ChartInfoModel> = new EventEmitter();

  chartOption: EChartsOption = {
    series: [
      {
        name: 'Percentage',
        radius: '50%',
        type: 'pie',
        selectedMode: 'single',
        data: [],
        label: {
          position: 'inside',
          formatter: '{b}: {d} %'
        },
      },
    ],
    color: ['#5470c6', '#ee6666'],
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
      item.balance >= 0 ? data[0].value = data[0].value + 1 : data[1].value = data[1].value + 1;
    });
    this.mergeOption = {
      series: [{ data }]
    };
  }

  /**
   * Send pie chart selected status
   * @param $event pie chart click event
   */
  public selectBarChartData($event: any): void {
    this.selectedChart.emit({
      name: $event.data.name,
      dataIndex: $event.dataIndex,
      selected: $event.event.target.selected
    });
  }

}
