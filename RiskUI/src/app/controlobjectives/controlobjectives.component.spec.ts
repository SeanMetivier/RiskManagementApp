import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlobjectivesComponent } from './controlobjectives.component';

describe('ControlobjectivesComponent', () => {
  let component: ControlobjectivesComponent;
  let fixture: ComponentFixture<ControlobjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlobjectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlobjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
