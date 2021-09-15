import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  chart: any;
  @Input() data: any;
  @Input() isSelected: boolean;
  constructor() { }

  ngOnInit() {
    this.createLineChart();
  }

  ngOnChanges() {
    // Chart will get updated only if Item is selected in list
    if(this.isSelected) {
      this.createLineChart();
    }
  }

  createLineChart() {
    const datapoints = this.data.map(datapoint => datapoint.l)

    this.chart = new Chart({
      chart: {
        type: 'line',
        height:'300px'
      },
  
      title: {
        text: ''
      },
      yAxis: {
        title: {
          text: "Price"
        }
      },
      xAxis: {
        title: {
          text: "Time"
        },
        gridLineWidth: 0,
        categories: this.data.map(datapoint => datapoint.ltt)
      },
      credits: {
        enabled: false
      },
      series: [{
          type:'line',
          name: '',
          showInLegend: false,
          data: datapoints
        }]
    });
  }
}
