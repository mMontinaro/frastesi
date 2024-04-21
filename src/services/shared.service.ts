import { Injectable } from '@angular/core';
import { CasoDTO } from '../app/models/caso-dto';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  mock = true;
  constructor(
    protected mockService: MockService,
  ) { }

  getListaCasi(): CasoDTO[]{
    let listaCasi: CasoDTO[] = [];
    if(this.mock){
      listaCasi = this.mockService.getMockListCasi();
    } else {
      //chiamare BACKEND
      //http.get()
    }
    return listaCasi;
  }

  eliminaCaso(element: CasoDTO){
    console.log("elminato caso con id " + element.id)
  }


}
