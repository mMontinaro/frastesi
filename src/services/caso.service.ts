import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CasoService {
    baseUrl = "localhost:8080/casi";
    basePostUrl = "localhost:8080/creaCaso";

    constructor(protected http: HttpClient) { }

    getListaCasi(): Observable<CasoDTO[]> {
        return this.http.get<CasoDTO[]>(this.baseUrl);
    }
    
    getCasoById(id: string): Observable<CasoDTO> {
        let url = this.baseUrl.concat("/" + id);
        return this.http.get<CasoDTO>(url);
    }
    
    eliminaCaso(id: CasoDTO): void{
        let url = this.baseUrl.concat("/elimina/" + id);
        const o = this.http.delete<CasoDTO>(url);
        console.log(o.toString());
        return;
    }

    salveCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        if(casoDTO.id) {
            return this.updateCaso(casoDTO);
        } else {
            return this.saveCaso(casoDTO)
        }
    } 

    updateCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        let url = this.baseUrl.concat("/chiudi/" + casoDTO.id);
        return this.http.put<CasoDTO>(url, casoDTO);
    }

    saveCaso(casoDTO: CasoDTO): Observable<CasoDTO> {
        return this.http.post<CasoDTO>(this.basePostUrl, casoDTO);
    }

}