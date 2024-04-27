import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MacchinaDTO } from '../../models/macchina-dto';
import { MacchineTableHeaders } from '../../utils/table-headers';
import { SharedService } from '../../../services/shared.service';
import { MacchinaService } from '../../../services/macchina.service';
import { constants } from '../../utils/constants';
import { environment } from '../../../assets/environment';

@Component({
  selector: 'app-macchine-table',
  templateUrl: './macchine-table.component.html',
  styleUrl: './macchine-table.component.scss'
})
export class MacchineTableComponent {
  @Input() dataSource!: MacchinaDTO[];
  @Output() emit = new EventEmitter<void>();
  displayedColumns: string[] = MacchineTableHeaders;
  service!: MacchinaService;
  isMock = environment.isMock;

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.macchinaService;
  }

  eliminaMacchina(element: MacchinaDTO) {
    if (this.isMock) {
      this.sharedService.eliminaMockMacchina(element);
    } else {
      this.service.eliminaMacchina(element);
    }
    this.emit.emit();
  }

  aggiornaMacchina(element: MacchinaDTO) {
    if (this.isMock) {
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
            this.emit.emit();
          }
        }
      );
    }
  }
}
