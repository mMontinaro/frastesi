import { Component, OnInit } from '@angular/core';
import { MetricService } from '../../services/metric.service';
import { Chart, registerables} from '../../../node_modules/chart.js';
import { MetricsDTO } from '../models/metrics-dto';
Chart.register(...registerables)

@Component({
  selector: 'app-usage-metric',
  templateUrl: './usage-metric.component.html',
  styleUrl: './usage-metric.component.scss',
})
export class UsageMetricComponent implements OnInit{
  chartData: any;
  public chart!: Chart;
  public instanceIds: string[] = [];  // Lista degli instanceIds disponibili
  public selectedInstanceId: string = '';  // ID selezionato

  constructor(private service:MetricService) {}

  ngOnInit() {
      this.loadInstanceIds();  // Carica gli instanceIds al caricamento del componente
      this.updateChart();  // Carica il grafico iniziale
    };

  loadInstanceIds() {
    // Implementa una chiamata API per ottenere gli instanceIds (mockup per ora)
    this.service.getInstanceIds().subscribe(ids => {
      this.instanceIds = ids;
      if (ids.length > 0) {
        this.selectedInstanceId = ids[0];  // Seleziona il primo ID per default
        this.updateChart();  // Aggiorna il grafico con il primo ID
      }
    });
  }

  updateChart() {
    if (!this.selectedInstanceId) {
      console.warn('No instanceId selected');
      return;
    }
    this.service.getMetricsByInstanceId(this.selectedInstanceId).subscribe(data => {
      this.createChart(data);
    });
  }

  createChart(data: MetricsDTO[]) {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Failed to find canvas element');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context');
      return;
    }

    if (this.chart) {
      this.chart.destroy();  // Distrugge il grafico precedente prima di crearne uno nuovo
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.timestamp ? d.timestamp.toLocaleString() : ''),  // Convert Date to string
        datasets: [{
          label: 'CPU Usage',
          data: data.map(d => d.cpuUsage ?? 0),  // Use zero if cpuUsage is undefined
          borderColor: 'rgb(75, 192, 192)',
          fill: false
        }, {
          label: 'Memory Usage',
          data: data.map(d => d.ramUsage ?? 0),  // Use zero if ramUsage is undefined
          borderColor: 'rgb(255, 99, 132)',
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
    });
  }
}