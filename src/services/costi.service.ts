import { Injectable } from '@angular/core';
import { CostiDTO } from '../app/models/costi-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../assets/environment';


@Injectable({
    providedIn: 'root'
})
export class CostiService {
    baseUrl = environment.costiApi.baseUrl;

    constructor(protected http: HttpClient) { }

    getListaCosti(): Observable<CostiDTO[]> {
        let url = this.baseUrl.concat("costi");
        this.printUrl(url);
        return this.http.get<CostiDTO[]>(url);
    }

    printUrl(url: string) {
        console.log("URL called: " + url);
    }
}