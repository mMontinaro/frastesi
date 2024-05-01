import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CasoDTO } from '../../models/caso-dto';
import { CasiTableHeaders } from '../../utils/table-headers';
import { CasoService } from '../../../services/caso.service';
import { SharedService } from '../../../services/shared.service';
import { environment } from '../../../assets/environment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-casi-table',
  templateUrl: './casi-table.component.html',
  styleUrl: './casi-table.component.scss'
})
export class CasiTableComponent {
  @Input() dataSource!: CasoDTO[];
  @Output() emit = new EventEmitter<void>();
  displayedColumns: string[] = CasiTableHeaders;
  service!: CasoService;
  isMock = environment.isMock;
  nuovoCasoDescrizione: string = '';

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.casoService;
  }

  eliminaCaso(element: CasoDTO) {
    this.service.eliminaCaso(element).subscribe({
      next: () => {
        console.log('Caso eliminato con successo');
        this.dataSource = this.dataSource.filter(caso => caso.id_caso !== element.id_caso);
        this.emit.emit();
      },
      error: (errore) => console.error('Errore nella eliminazione del caso', errore)
    });
  }
  
  chiudiCaso(element: CasoDTO) {
    this.service.chiudiCaso(element).subscribe({
      next: () => {
        console.log('Caso chiuso con successo');
        const index = this.dataSource.findIndex(caso => caso.id_caso === element.id_caso);
        if (index !== -1) {
          this.dataSource[index].stato = 'Chiuso';
        }
        this.emit.emit();
      },
      error: (errore) => console.error('Errore nella chiusura del caso', errore)
    });
  }

  creaCaso(element: string) {
    const nuovoCaso = {
      descrizione: element,
    };

    this.service.creaCaso(nuovoCaso).subscribe({
      next: (risposta) => {
        console.log('Caso creato con successo', risposta);
        this.nuovoCasoDescrizione = ''; // Resetta il campo dopo la creazione
      },
      error: (errore) => console.error('Errore nella creazione del caso', errore)
    });
  }
}
