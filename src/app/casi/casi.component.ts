import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CasoDTO } from '../models/caso-dto';
import { SharedService } from '../../services/shared.service';
import { CasiTableHeaders } from '../utils/table-headers';
import { Observable } from 'rxjs';
import { CasoService } from '../../services/caso.service';
import { environment } from '../../assets/environment';
import { MacchinaCasoDTO } from '../models/macchina-caso-dto';
import { MacchinaCasoService } from '../../services/macchina-caso.service';
import { listaCasi, listaMacchine } from '../../services/mock.service';

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
  ds!: MacchinaCasoDTO[];
  ready: boolean = false;
  service!: CasoService;
  macchinaCasoService!: MacchinaCasoService;
  isMock = environment.isMock;

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef) {
    this.service = sharedService.casoService;
    this.macchinaCasoService = sharedService.macchinaCasoService;
  }

  ngOnInit(): void {
    this.retrieveDataSource();
    this.retrieveDS();
  }

  eliminaCaso(element: CasoDTO) {
    if (this.isMock) {
      this.sharedService.eliminaMockCaso(element);
    } else {
      this.service.eliminaCaso(element);
    }
  }

  retrieveDataSource() {
    if (this.isMock) {
      this.dataSource = this.sharedService.getMockListaCasi();
    } else {
      this.service.getListaCasi().subscribe(
        response => {
          if (response) {
            this.dataSource = response;
          }
        }
      )
    }
  }

  emit() {
    if (this.isMock) {
     
    } else {
      this.retrieveDS();
    }
    this.cdRef.detectChanges();
  }

  retrieveDS() {
    if (this.isMock) {
      this.ds = this.sharedService.getMockListaMacchineCasi();
    } else {
      this.macchinaCasoService.getListaMacchineCasi().subscribe(
        response => {
          if (response) {
            this.ds = response;
            this.ready = true;
          }
        }
      )
    }
  }
}
