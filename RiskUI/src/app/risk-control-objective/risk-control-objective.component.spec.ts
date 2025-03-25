import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskControlObjectiveComponent } from './risk-control-objective.component';

describe('RiskControlObjectiveComponent', () => {
  let component: RiskControlObjectiveComponent;
  let fixture: ComponentFixture<RiskControlObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskControlObjectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskControlObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
