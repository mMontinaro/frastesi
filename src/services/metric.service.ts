import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../app/utils/constants';
import { environment } from '../assets/environment';
import { Injectable } from '@angular/core';
import { MetricsDTO } from '../app/models/metrics-dto';


@Injectable({
    providedIn: 'root'
})
export class MetricService {
    baseUrl = environment.metricsApi.baseUrl;

    constructor(protected http: HttpClient) { }

    getAllMetriche(): Observable<MetricsDTO[]> {
        let url = this.baseUrl.concat("metrics");
        this.printUrl(url);
        return this.http.get<MetricsDTO[]>(url);
    }

    printUrl(url: string) {
        console.log("URL called: " + url);
    }
}