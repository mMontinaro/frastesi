import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BucketService } from '../../services/bucket.service';
import { environment } from '../../assets/environment';
import { SharedService } from '../../services/shared.service';
import { BucketS3Headers } from '../utils/table-headers';

@Component({
  selector: 'app-bucket-s3',
  templateUrl: './bucket-s3.component.html',
  styleUrl: './bucket-s3.component.scss'
})
export class BucketS3Component implements OnInit {

  dataSource!: string[];
  displayedColumns: string[] = BucketS3Headers;
  service!: BucketService;
  isMock = environment.isMock;
  isSelected!: boolean;
  bucketName?: string;
  fileContent?: string;
  bucketTitle?: string;
  key?: string;

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef) {
    this.service = sharedService.bucketService;
  }

  ngOnInit(): void {
    this.isSelected = false;
  }

  retrieveDataSource() {
    this.isSelected = false;
    if (this.isMock) {
      this.dataSource = this.sharedService.getMockListaKeysByBucketName();
      this.bucketTitle = this.bucketName
    } else {
      if (this.bucketName) {
        this.service.getListaKeysByBucketName(this.bucketName).subscribe(
          response => {
            if (response) {
              this.dataSource = response;
              this.cdRef.detectChanges();
            }
          }
        )
      }
    }
  }

  showFileContents(key: string) {
    this.key = key;
    if (this.isMock) {
      this.fileContent = key + this.sharedService.getMockFileContentsByKey() ;
      this.isSelected = true;
    } else {
      if (this.bucketName) {
        this.service.getFileContentsByBucketNameAndKey(this.bucketName, key).subscribe(
          response => {
            this.fileContent = response;
            this.isSelected = true;
          }
        )
      }
    }
  }

}
