import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';

@Injectable({
    providedIn: 'root'
})
export class MockService {
    constructor() { }

    getMockListCasi(): CasoDTO[] {
        let listaCasi: CasoDTO[] = [];

        listaCasi.push({ id: 1, descrizione: 'caso1', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' });
        listaCasi.push({ id: 2, descrizione: 'caso2', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' });
        listaCasi.push({ id: 3, descrizione: 'caso3', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' });
        listaCasi.push({ id: 4, descrizione: 'caso4', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' });
        listaCasi.push({ id: 5, descrizione: 'caso5', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' });
        listaCasi.push({ id: 6, descrizione: 'caso6', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' });
        listaCasi.push({ id: 7, descrizione: 'caso7', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' });
        listaCasi.push({ id: 8, descrizione: 'caso8', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' });
        return listaCasi;
    }

}
