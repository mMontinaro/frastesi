import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostiComponent } from './costi.component';

describe('CostiComponent', () => {
  let component: CostiComponent;
  let fixture: ComponentFixture<CostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
