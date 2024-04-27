import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CasoDTO } from '../../models/caso-dto';
import { CasiTableHeaders } from '../../utils/table-headers';
import { CasoService } from '../../../services/caso.service';
import { SharedService } from '../../../services/shared.service';
import { environment } from '../../../assets/environment';

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

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.casoService;
  }

  eliminaCaso(element: CasoDTO) {
    if (this.isMock) {
      this.sharedService.eliminaMockCaso(element);
    } else {
      this.service.eliminaCaso(element);
    }
    this.emit.emit();
  }

  chiudiCaso(element: CasoDTO) {
    if (this.isMock) {
      this.sharedService.chiudiMockCaso(element);
    } else {
      this.service.updateCaso(element);
    }
    this.emit.emit();
  }
}
