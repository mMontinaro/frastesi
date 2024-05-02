import { Component, OnInit } from '@angular/core';
import { MetricService } from '../../services/metric.service';
import { Chart, ChartType, registerables, ChartConfiguration, ChartTypeRegistry } from 'chart.js';
import { MetricsDTO } from '../models/metrics-dto';
Chart.register(...registerables);

@Component({
  selector: 'app-usage-metric',
  templateUrl: './usage-metric.component.html',
  styleUrls: ['./usage-metric.component.scss'],
})
export class UsageMetricComponent implements OnInit {
  public cpuChart?: Chart;
  public ramChart?: Chart;
  public instanceIds: string[] = [];
  public selectedInstanceId: string = '';

  constructor(private service: MetricService) {}

  ngOnInit() {
    this.loadInstanceIds();
  }

  loadInstanceIds() {
    this.service.getInstanceIds().subscribe(ids => {
      this.instanceIds = ids;
      if (ids.length > 0) {
        this.selectedInstanceId = ids[0];
        this.updateChart();
      }
    });
  }

  updateChart() {
    if (!this.selectedInstanceId) {
      console.warn('No instanceId selected');
      return;
    }
    this.service.getMetricsByInstanceId(this.selectedInstanceId).subscribe(data => {
      this.createCharts(data);
    });
  }

  createCharts(data: MetricsDTO[]) {
    this.createChart(data, 'cpuChart', 'CPU Usage', 'cpuUsage', 'rgb(75, 192, 192)');
    this.createChart(data, 'ramChart', 'Memory Usage', 'ramUsage', 'rgb(255, 99, 132)');
}

  createChart(data: MetricsDTO[], canvasId: string, label: string, key: keyof MetricsDTO, color: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.error(`Failed to find ${canvasId} element`);
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context');
      return;
    }

    // Distruggi il grafico esistente se già esiste
    if (canvasId === 'cpuChart' && this.cpuChart) {
      this.cpuChart.destroy();
    } else if (canvasId === 'ramChart' && this.ramChart) {
      this.ramChart.destroy();
    }

    // Mappatura dei dati garantendo che tutti i valori siano 'number' o 'null'
  const chartData = data.map(d => {
    const value = d[key];
    if (typeof value === 'number') {
      return value;
    } else {
      return null;  // Usa 'null' come fallback se il valore non è un numero
    }
  });

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.map(d => d.timestamp ? d.timestamp.toLocaleString() : ''),
        datasets: [{
          label: label,
          data: chartData,
          borderColor: color,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const newChart = new Chart(ctx, config);

    if (canvasId === 'cpuChart') {
      this.cpuChart = newChart;
    } else if (canvasId === 'ramChart') {
      this.ramChart = newChart;
    }
  }
}