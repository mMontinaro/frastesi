import { Component, OnInit } from '@angular/core';
import { MetricService } from '../../services/metric.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-usage-metric',
  templateUrl: './usage-metric.component.html',
  styleUrl: './usage-metric.component.scss',
})
export class UsageMetricComponent implements OnInit{
  public chartData: any;

  constructor(private metricService: MetricService) { }

  ngOnInit() {
    this.metricService.getAllMetriche().subscribe(data => {
      // Qui dovresti trasformare i dati come necessario per il tuo grafico
      // Ad esempio, puoi configurare le etichette e i dataset per Chart.js
      this.chartData = {
        labels: data.map(d => d.timestamp), // Supponendo che i dati abbiano una proprietà timestamp
        datasets: [
          {
            label: 'CPU Usage',
            data: data.map(d => d.cpuUsage), // Supponendo che i dati abbiano una proprietà cpuUsage
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Memory Usage',
            data: data.map(d => d.ramUsage), // Supponendo che i dati abbiano una proprietà memoryUsage
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
      };
    });
  }
}
