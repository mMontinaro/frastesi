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
  macchina: MacchinaDTO = new MacchinaDTO();


  sistemiOperativi = [
    { id: 'windows', name: 'Windows Server 2022' },
    { id: 'ubuntu', name: 'Ubuntu Server' }
  ];

  configurazioniHW = [
    { id: 't2.micro', name: 't2.micro' },
    { id: 't2.medium', name: 't2.medium' },
    { id: 't2.large', name: 't2.large' }
  ];

  programmi = {
    windows: ['Autopsy', 'Notepad++'],
    ubuntu: ['The Sleuth Kit', 'ftkimager']
  };

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

  creaMacchina() {
    this.service.creaMacchina(this.macchina).subscribe(
      response => {
        console.log('VM creata con successo:', response);
        // Aggiungi qui logiche di post-creazione, come notifiche o reindirizzamenti
      },
      error => {
        console.error('Errore durante la creazione della VM:', error);
      }
    );
  }

  updateProgrammi() {
    this.macchina.programma = '';  // Resetta il programma quando cambia il SO
  }

}
