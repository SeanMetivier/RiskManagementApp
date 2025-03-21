import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitigationPlansComponent } from './mitigation-plans.component';

describe('MitigationPlansComponent', () => {
  let component: MitigationPlansComponent;
  let fixture: ComponentFixture<MitigationPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitigationPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitigationPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
