import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../assets/environment';
import { MacchinaCasoDTO } from '../app/models/macchina-caso-dto';


@Injectable({
    providedIn: 'root'
})
export class MacchinaCasoService {
    baseUrl = environment.macchinaCasoApi.baseUrl;

    constructor(protected http: HttpClient) { }

    getListaMacchineCasi(): Observable<MacchinaCasoDTO[]> {
        let url = this.baseUrl.concat("macchineCasi");
        this.printUrl(url);
        return this.http.get<MacchinaCasoDTO[]>(url);
    }
    

    salvaMacchinaCaso(mcDTO: MacchinaCasoDTO): Observable<MacchinaCasoDTO> {
        let url = this.baseUrl.concat("creaMacchinaCaso");
        this.printUrl(url);
        mcDTO.idCaso = Number(mcDTO.idCaso);
        mcDTO.idMacchina = Number(mcDTO.idMacchina);
        return this.http.post<MacchinaCasoDTO>(url, mcDTO);
    } 

    printUrl(url: string) {
        console.log("URL called: " + url);
    }

}