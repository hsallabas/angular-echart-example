import { Component, OnInit } from '@angular/core';

const single = [
  {
    name: 'Germany',
    value: 3
  },
  {
    name: 'USA',
    value: 2
  },
];

@Component({
  selector: 'app-account-pie-chart',
  templateUrl: './account-pie-chart.component.html',
  styleUrls: ['./account-pie-chart.component.scss']
})
export class AccountPieChartComponent implements OnInit {
  single: any[] = [];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
