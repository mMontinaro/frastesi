import { CasoDTO } from "./caso-dto";
import { MacchinaDTO } from "./macchina-dto";

export class MacchinaCasoDTO {
    id?: number;
    macchina?: MacchinaDTO;
    caso?: CasoDTO;
    dataCreazione?: Date;
    dataDistruzione?: Date;
    costoMinuto?: number;
    idCaso?: number;
    idMacchina?: number;
}