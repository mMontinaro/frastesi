import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CasoDTO } from '../models/caso-dto';
import { SharedService } from '../../services/shared.service';
import { CasiTableHeaders } from '../utils/table-headers';

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

  constructor(
    protected sharedService: SharedService){
  }

  ngOnInit(): void {
    this.dataSource = this.sharedService.getListaCasi();
    this.ready = true;
  }

  displayedColumns: string[] = CasiTableHeaders;

  eliminaCaso(element: CasoDTO){
    this.sharedService.eliminaCaso(element);
  }
}
