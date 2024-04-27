import { Component } from '@angular/core';
import { MacchinaDTO } from '../models/macchina-dto';
import { MacchineTableHeaders } from '../utils/table-headers';
import { MacchinaService } from '../../services/macchina.service';
import { SharedService } from '../../services/shared.service';
import { constants } from '../utils/constants';
import { environment } from '../../assets/environment';

@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrl: './macchine.component.scss'
})
export class MacchineComponent {

  dataSource!: MacchinaDTO[];
  ready: boolean = false;
  service!: MacchinaService;
  isMock = environment.isMock;

  constructor(
    private sharedService: SharedService) {
    this.service = sharedService.macchinaService;
  }

  ngOnInit(): void {
    this.retrieveDataSource();
  }

  retrieveDataSource() {
    if (this.isMock) {
      this.dataSource = this.sharedService.getMockListaMacchine();
    } else {
      this.service.getListaMacchine().subscribe(
        response => {
          if (response) {
            this.dataSource = response;
            this.ready = true;
          }
        }
      )
    }
  }
}
