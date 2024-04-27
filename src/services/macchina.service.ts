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
    
    eliminaMacchina(id: MacchinaDTO): void{
        let url = this.baseUrl.concat("elimina/" + id);
        this.printUrl(url);
        const o = this.http.delete<MacchinaDTO>(url);
        console.log(o.toString());
        return;
    }

    aggiornaMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        if(macchinaDTO.stato && macchinaDTO.stato == constants.statoMacchina.accesa) {
            let url = this.baseUrl.concat("spegniMacchina/" + macchinaDTO.id_macchina);
            this.printUrl(url);
            return this.http.patch<MacchinaDTO>(url, null);
        } else {
            let url = this.baseUrl.concat("accendiMacchina/" + macchinaDTO.id_macchina);
            this.printUrl(url);
            return this.http.patch<MacchinaDTO>(url, null);
        }
    }

    saveMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("creaMacchina");
        this.printUrl(url);
        return this.http.post<MacchinaDTO>(url, macchinaDTO);
    }
    
    printUrl(url: string) {
        console.log("URL called: " + url);
    }
}