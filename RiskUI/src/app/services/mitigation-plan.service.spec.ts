import { TestBed } from '@angular/core/testing';

import { MitigationPlanService } from './mitigation-plan.service';

describe('MitigationPlanService', () => {
  let service: MitigationPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MitigationPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
