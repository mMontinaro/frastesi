import { Component } from '@angular/core';
import { MacchinaDTO } from '../models/macchina-dto';
import { MacchineTableHeaders } from '../utils/table-headers';
import { MacchinaService } from '../../services/macchina.service';
import { SharedService } from '../../services/shared.service';
import { constants } from '../utils/constants';

@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrl: './macchine.component.scss'
})
export class MacchineComponent {

  dataSource!: MacchinaDTO[];
  ready: boolean = false;
  displayedColumns: string[] = MacchineTableHeaders;
  service!: MacchinaService;

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.macchinaService;
  }

  ngOnInit(): void {
    this.retrieveDataSource();
    this.ready = true;
  }


  eliminaMacchina(element: MacchinaDTO) {
    this.sharedService.eliminaMockMacchina(element);
  }

  aggiornaMacchina(element: MacchinaDTO) {
    let mock = true;
    if (mock) {
      switch (element.stato) {
        case constants.statoMacchina.accesa:
          element.stato = constants.statoMacchina.spenta;
          break;
        case constants.statoMacchina.spenta:
          element.stato = constants.statoMacchina.accesa;
          break;
      } console.log("aggiorna macchina con id " + element.id_macchina);
    } else {
      this.service.aggiornaMacchina(element).subscribe(
        response => {
          if (response) {
            this.retrieveDataSource();
          }
        }
      );
    }
  }

  retrieveDataSource() {
    let mock = true
    if (mock) {
      this.dataSource = this.sharedService.getMockListaMacchine();
    } else {
      this.service.getListaMacchine().subscribe(
        response => {
          if (response) {
            this.dataSource = response;
          }
        }
      )
    }
  }
}
