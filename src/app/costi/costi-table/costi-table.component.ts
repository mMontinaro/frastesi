import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CostiDTO } from '../../models/costi-dto';
import { CostiTableHeaders } from '../../utils/table-headers';
import { SharedService } from '../../../services/shared.service';
import { CostiService } from '../../../services/costi.service';
import { constants } from '../../utils/constants';
import { environment } from '../../../assets/environment';

@Component({
  selector: 'app-costi-table',
  templateUrl: './costi-table.component.html',
  styleUrl: './costi-table.component.scss'
})
export class CostiTableComponent {
  @Input() dataSource!: CostiDTO[];
  @Output() emit = new EventEmitter<void>();
  displayedColumns: string[] = CostiTableHeaders;
  service!: CostiService;
  isMock = environment.isMock;

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.costiService;
  }
}
