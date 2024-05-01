import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketS3Component } from './bucket-s3.component';

describe('BucketS3Component', () => {
  let component: BucketS3Component;
  let fixture: ComponentFixture<BucketS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BucketS3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BucketS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
