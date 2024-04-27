import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MacchinaCasoDTO } from '../models/macchina-caso-dto';
import { MacchineCasiTableHeaders } from '../utils/table-headers';
import { environment } from '../../assets/environment';
import { MacchinaCasoService } from '../../services/macchina-caso.service';
import { SharedService } from '../../services/shared.service';
import { listaCasi, listaMacchine, listaMacchineCasi } from '../../services/mock.service';
import { Observable, of } from 'rxjs';
import { MacchinaDTO } from '../models/macchina-dto';
import { CasoDTO } from '../models/caso-dto';

@Component({
  selector: 'app-macchine-casi-table',
  templateUrl: './macchine-casi-table.component.html',
  styleUrl: './macchine-casi-table.component.scss'
})
export class MacchineCasiTableComponent implements OnInit {
  @Input({ alias: "ds" }) dataSource!: MacchinaCasoDTO[];
  ds!: Observable<MacchinaCasoDTO[]>;
  @Output() emit = new EventEmitter<void>();
  displayedColumns: string[] = MacchineCasiTableHeaders;
  service!: MacchinaCasoService;
  isMock = environment.isMock;
  newMC!: MacchinaCasoDTO;
  listaMacchine!: MacchinaDTO[];
  listaCasi!: CasoDTO[];

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef) {
    this.service = sharedService.macchinaCasoService;
  }

  ngOnInit(): void {
    this.ds = of(this.dataSource);
    this.newMC = new MacchinaCasoDTO();
    this.retrieveMacchine();
    this.retrieveCasi();
  }

  addMacchinaCaso() {
    if (this.isMock) {
      console.log(this.newMC);
      this.dataSource.push({
        id: 3,
        macchina: listaMacchine[6],
        caso: listaCasi[3],
        dataCreazione: new Date("2024-04-15 16:48:49.000000"),
        dataDistruzione: new Date("2024-04-20 16:48:49.000000"),
        costoMinuto: 15,
        idCaso: 4,
        idMacchina: 7
      });
    } else {
      this.service.salvaMacchinaCaso(this.newMC).subscribe(
        response => {
          if (response) {
            this.newMC = response;
            this.dataSource.push(this.newMC);
          }
        }
      )
    }
    this.ds = of(this.dataSource);
    this.cdRef.detectChanges();
    this.emit.emit();

  }

  retrieveMacchine() {
    if (this.isMock) {
      this.listaMacchine = listaMacchine;
    } else {
      this.sharedService.macchinaService.getListaMacchine().subscribe(
        response => {
          if (response) {
            this.listaMacchine = response;
          }
        }
      )
    }
  }

  retrieveCasi() {
    if (this.isMock) {
      this.listaCasi = listaCasi;
    } else {
      this.sharedService.casoService.getListaCasi().subscribe(
        response => {
          if (response) {
            this.listaCasi = response;
          }
        }
      )
    }
  }
}
