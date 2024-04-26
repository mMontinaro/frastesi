import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CasoDTO } from '../models/caso-dto';
import { SharedService } from '../../services/shared.service';
import { CasiTableHeaders } from '../utils/table-headers';
import { Observable } from 'rxjs';
import { CasoService } from '../../services/caso.service';

export interface PeriodicElement {
name: string;
position: number;
weight: number;
symbol: string;
}

@Component({
  selector: 'app-casi',
  templateUrl: './casi.component.html',
  styleUrl: './casi.component.scss'
})
export class CasiComponent implements OnInit {

  dataSource!: CasoDTO[];
  ready: boolean = false;
  displayedColumns: string[] = CasiTableHeaders;
  service!: CasoService;

  constructor(
    private sharedService: SharedService){
      this.service = sharedService.casoService;
  }

  ngOnInit(): void {
    this.retrieveDataSource();
    this.ready = true;
  }


  eliminaCaso(element: CasoDTO){
    let m = true;
    if(m) {
      this.sharedService.eliminaMockCaso(element);
    } else {
      this.service.eliminaCaso(element);
    }
  }

  retrieveDataSource(){
    let mock = true
    if(mock) {
      this.dataSource = this.sharedService.getMockListaCasi();
    } else {
      this.service.getListaCasi().subscribe(
        response => {
          if(response) {
            this.dataSource = response;
          }
        }
      )
    }
  }
}
