import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MacchinaDTO } from '../app/models/macchina-dto';
import { constants } from '../app/utils/constants';


@Injectable({
    providedIn: 'root'
})
export class MacchinaService {
    baseUrl = "localhost:8080/";

    constructor(protected http: HttpClient) { }

    getListaMacchine(): Observable<MacchinaDTO[]> {
        let url = this.baseUrl.concat("macchine");
        return this.http.get<MacchinaDTO[]>(url);
    }
    
    eliminaMacchina(id: MacchinaDTO): void{
        let url = this.baseUrl.concat("elimina/" + id);
        const o = this.http.delete<MacchinaDTO>(url);
        console.log(o.toString());
        return;
    }

    aggiornaMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        if(macchinaDTO.stato && macchinaDTO.stato == constants.statoMacchina.accesa) {
            let url = this.baseUrl.concat("spegniMacchina/" + macchinaDTO.id_macchina);
            return this.http.patch<MacchinaDTO>(url, null);
        } else {
            let url = this.baseUrl.concat("accendiMacchina/" + macchinaDTO.id_macchina);
            return this.http.patch<MacchinaDTO>(url, null);
        }
    }

    saveMacchina(macchinaDTO: MacchinaDTO): Observable<MacchinaDTO> {
        let url = this.baseUrl.concat("/creaMacchina");
        return this.http.post<MacchinaDTO>(url, macchinaDTO);
    }
}