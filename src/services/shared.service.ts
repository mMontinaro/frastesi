import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { MockService } from './mock.service';
import { CasoService } from './caso.service';
import { MacchinaService } from './macchina.service';
import { MacchinaDTO } from '../app/models/macchina-dto';
import { constants } from '../app/utils/constants';
import { MacchinaCasoDTO } from '../app/models/macchina-caso-dto';
import { MacchinaCasoService } from './macchina-caso.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    protected mockService: MockService,
    public casoService: CasoService,
    public macchinaService: MacchinaService,
    public macchinaCasoService: MacchinaCasoService
  ) { }

  getMockListaCasi(): CasoDTO[]{
    return this.mockService.getMockListCasi();;
  }

  eliminaMockCaso(element: CasoDTO){
    console.log("elminato caso con id " + element.id)
  }
  
  chiudiMockCaso(element: CasoDTO){
    element.stato = constants.statoCaso.chiuso;
    console.log("chiuso caso con id " + element.id)
  }

  getMockListaMacchine(): MacchinaDTO[]{
    return this.mockService.getMockListMacchine();
  }

  eliminaMockMacchina(element: MacchinaDTO){
    console.log("elminata macchina con id " + element.id_macchina);
  }

  getMockListaMacchineCasi(): MacchinaCasoDTO[] {
    return this.mockService.getMockListMacchineCasi();
  }


}
