import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../assets/environment';


@Injectable({
    providedIn: 'root'
})
export class CasoService {
    baseUrl = environment.casoApi.baseUrl;
    basePostUrl = environment.casoApi.basePostUrl;

    constructor(protected http: HttpClient) { }

    getListaCasi(): Observable<CasoDTO[]> {
        this.printUrl(this.baseUrl);
        return this.http.get<CasoDTO[]>(this.baseUrl);
    }
    
    getCasoById(id: string): Observable<CasoDTO> {
        let url = this.baseUrl.concat("/" + id);
        this.printUrl(url);
        return this.http.get<CasoDTO>(url);
    }
    
    eliminaCaso(id: CasoDTO): void{
        let url = this.baseUrl.concat("/elimina/" + id);
        this.printUrl(url);
        const o = this.http.delete<CasoDTO>(url);
        return;
    }

    salveCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        if(casoDTO.id_caso) {
            return this.updateCaso(casoDTO);
        } else {
            return this.saveCaso(casoDTO)
        }
    } 

    updateCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        let url = this.baseUrl.concat("/chiudi/" + casoDTO.id_caso);
        this.printUrl(url);
        return this.http.put<CasoDTO>(url, casoDTO);
    }

    saveCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        this.printUrl(this.basePostUrl);
        return this.http.post<CasoDTO>(this.basePostUrl, casoDTO);
    }

    printUrl(url: string) {
        console.log("URL called: " + url);
    }

}