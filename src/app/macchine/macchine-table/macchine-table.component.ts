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
    this.service.eliminaMacchina(element).subscribe({
      next: () => {
        console.log('Macchina distrutta con successo');
        this.dataSource = this.dataSource.filter(macchina => macchina.id_macchina !== element.id_macchina);
        this.emit.emit();
      },
      error: (errore) => console.error('Errore nella destruzione della macchina', errore)
    });
  }

  accendiMacchina(element: MacchinaDTO) {
    this.service.accendiMacchina(element).subscribe({
      next: () => {
        console.log('Macchina distrutta con successo');
        this.dataSource = this.dataSource.filter(macchina => macchina.id_macchina !== element.id_macchina);
        this.emit.emit();
      },
      error: (errore) => console.error('Errore nella destruzione della macchina', errore)
    });
  }

  spegniMacchina(element: MacchinaDTO) {
    this.service.spegniMacchina(element).subscribe({
      next: () => {
        console.log('Macchina distrutta con successo');
        this.dataSource = this.dataSource.filter(macchina => macchina.id_macchina !== element.id_macchina);
        this.emit.emit();
      },
      error: (errore) => console.error('Errore nella destruzione della macchina', errore)
    });
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
