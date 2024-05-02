import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MacchinaDTO } from '../app/models/macchina-dto';
import { constants } from '../app/utils/constants';
import { environment } from '../assets/environment';


@Injectable({
    providedIn: 'root'
})
export class MacchinaService {
    baseUrl = environment.macchinaApi.baseUrl;

    constructor(protected http: HttpClient) { }

    getListaMacchine(): Observable<MacchinaDTO[]> {
        let url = this.baseUrl.concat("macchine");
        this.printUrl(url);
        return this.http.get<MacchinaDTO[]>(url);
    }
    
    eliminaMacchina(macchinaDto: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("eliminaMacchina/" + macchinaDto.id_macchina);
        this.printUrl(url);
        return this.http.delete<MacchinaDTO>(url);
        //console.log(o.toString());
    }

    accendiMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("accendiMacchina/" + macchinaDTO.id_macchina);
        this.printUrl(url);
        return this.http.put<MacchinaDTO>(url, macchinaDTO);
    } 
        
    spegniMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("spegniMacchina/" + macchinaDTO.id_macchina);
        this.printUrl(url);
        return this.http.put<MacchinaDTO>(url, macchinaDTO);
     }

    creaMacchina(macchina: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("creaMacchina");
        this.printUrl(url);
        return this.http.post<MacchinaDTO>(url, macchina);
      }
    
    printUrl(url: string) {
        console.log("URL called: " + url);
    }
}