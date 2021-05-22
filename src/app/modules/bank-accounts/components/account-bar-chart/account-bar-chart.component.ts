import { Component, OnInit } from '@angular/core';

const single = [
  {
    name: 'Germany',
    value: 100
  },
  {
    name: 'USA',
    value: -100
  },
  {
    name: 'France',
    value: 0
  },
  {
    name: 'Turkey',
    value: 200
  }
];

@Component({
  selector: 'app-account-bar-chart',
  templateUrl: './account-bar-chart.component.html',
  styleUrls: ['./account-bar-chart.component.scss']
})
export class AccountBarChartComponent implements OnInit {
  single: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8']
  };


  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }

}
