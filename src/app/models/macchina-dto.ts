export class MacchinaDTO {
    id_macchina?: number;
    nomeMacchina?: string;
    configurazioneHW?: string;
    stato?: string;
    indirizzoIP?: string;
    tempoAccensione?: number;
    dataCreazione?: Date;
    dataDistruzione?: Date;
    dataAccensione?: Date;
    dataSpegnimento?: Date;
    sistemaOperativo?: string;
    volume?: string;
    costoMinuto?: number;
    programma?: string;
    instanceId?: string;
}