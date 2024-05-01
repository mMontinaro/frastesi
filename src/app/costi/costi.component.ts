import { Component } from '@angular/core';
import { CostiDTO } from '../models/costi-dto';
import { CostiService } from '../../services/costi.service';
import { SharedService } from '../../services/shared.service';
import { environment } from '../../assets/environment';

@Component({
  selector: 'app-costi',
  templateUrl: './costi.component.html',
  styleUrl: './costi.component.scss'
})
export class CostiComponent {

  dataSource!: CostiDTO[];
  ready: boolean = false;
  service!: CostiService;

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.costiService;
  }

  ngOnInit(): void {
    this.retrieveDataSource();
  }

  retrieveDataSource() {
      this.service.getListaCosti().subscribe(
        response => {
          if (response) {
            this.dataSource = response;
            this.ready = true;
          }
        }
      )
  }
}
