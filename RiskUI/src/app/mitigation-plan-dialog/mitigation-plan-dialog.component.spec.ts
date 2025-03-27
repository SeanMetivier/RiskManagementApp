import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitigationPlanDialogComponent } from './mitigation-plan-dialog.component';

describe('MitigationPlanDialogComponent', () => {
  let component: MitigationPlanDialogComponent;
  let fixture: ComponentFixture<MitigationPlanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitigationPlanDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitigationPlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
