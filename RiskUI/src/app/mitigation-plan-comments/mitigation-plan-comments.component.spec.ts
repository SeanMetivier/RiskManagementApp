import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitigationPlanCommentsComponent } from './mitigation-plan-comments.component';

describe('MitigationPlanCommentsComponent', () => {
  let component: MitigationPlanCommentsComponent;
  let fixture: ComponentFixture<MitigationPlanCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitigationPlanCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitigationPlanCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
