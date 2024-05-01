import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostiTableComponent } from './costi-table.component';

describe('CostiTableComponent', () => {
  let component: CostiTableComponent;
  let fixture: ComponentFixture<CostiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostiTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
