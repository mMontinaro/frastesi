import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { MacchinaDTO } from '../app/models/macchina-dto';
import { MacchinaCasoDTO } from '../app/models/macchina-caso-dto';

@Injectable({
    providedIn: 'root'
})
export class MockService {
    constructor() { }

    getMockListCasi(): CasoDTO[] {
        return listaCasi;
    }

    getMockListMacchine(): MacchinaDTO[] {
        return listaMacchine;
    }

    getMockListMacchineCasi(): MacchinaCasoDTO[] {
        return listaMacchineCasi;
    }

}

export const listaCasi: CasoDTO[] = [
    { id_caso: 1, descrizione: 'caso1', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' },
    { id_caso: 2, descrizione: 'caso2', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' },
    { id_caso: 3, descrizione: 'caso3', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' },
    { id_caso: 4, descrizione: 'caso4', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' },
    { id_caso: 5, descrizione: 'caso5', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' },
    { id_caso: 6, descrizione: 'caso6', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' },
    { id_caso: 7, descrizione: 'caso7', dataCreazione: new Date("2024-04-15 16:48:49.000000"), stato: 'Aperto' },
    { id_caso: 8, descrizione: 'caso8', dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataChiusura: new Date("2024-04-20 16:48:49.000000"), stato: 'Chiuso' }
]

export const listaMacchine: MacchinaDTO[] = [
    { id_macchina: 1, nomeMacchina: 'macchina1', stato: 'accesa', indirizzoIP: '54.227.51.17', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 2, nomeMacchina: 'macchina2', stato: 'accesa', indirizzoIP: '34.204.52.228', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 3, nomeMacchina: 'macchina3', stato: 'spenta', indirizzoIP: '172.31.22.55', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 4, nomeMacchina: 'macchina4', stato: 'spenta', indirizzoIP: '34.204.52.228', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 5, nomeMacchina: 'macchina5', stato: 'spenta', indirizzoIP: '54.227.51.17', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 6, nomeMacchina: 'macchina6', stato: 'distrutta', indirizzoIP: '172.31.22.55', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataDistruzione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 7, nomeMacchina: 'macchina7', stato: 'accesa', indirizzoIP: '172.31.22.55', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' },
    { id_macchina: 8, nomeMacchina: 'macchina8', stato: 'distrutta', indirizzoIP: '34.204.52.228', tempoAccensione: 14, dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataDistruzione: new Date("2024-04-15 16:48:49.000000"), sistemaOperativo: 'Linux', configurazioneHW: 't2.micro', volume: '30', programma: 'The Sleuth Kit' }
]

export const listaMacchineCasi: MacchinaCasoDTO[] = [
    { id: 1, macchina: listaMacchine[0], caso: listaCasi[0], dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataDistruzione: new Date("2024-04-20 16:48:49.000000"), costoMinuto: 10, idCaso: 1, idMacchina: 1 },
    { id: 2, macchina: listaMacchine[1], caso: listaCasi[2], dataCreazione: new Date("2024-04-15 16:48:49.000000"), dataDistruzione: new Date("2024-04-20 16:48:49.000000"), costoMinuto: 10, idCaso: 3, idMacchina: 2 }
        
]