import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageMetricComponent } from './usage-metric.component';

describe('UsageMetricComponent', () => {
  let component: UsageMetricComponent;
  let fixture: ComponentFixture<UsageMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsageMetricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsageMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
