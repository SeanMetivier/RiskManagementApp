import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ControlService } from '../services/control.service';
import { RiskService } from '../services/risk.service';

@Component({
  selector: 'app-risk-control-objective',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatDialogModule],
  templateUrl: './risk-control-objective.component.html',
  styleUrl: './risk-control-objective.component.css'
})
export class RiskControlObjectiveComponent implements OnInit {
  linkForm!: FormGroup;
  controlObjectives: any[] = [];
  risks: any[] = [];
  

  constructor(
    private fb: FormBuilder,
    private controlService: ControlService,
    private riskService: RiskService,
    private dialogRef: MatDialogRef<RiskControlObjectiveComponent>, @Inject(MAT_DIALOG_DATA) public data: { riskID?: string, controlObjectiveID?: string },
  ) { }

  get isLinkingRiskToObjective(): boolean {
    return !!this.data?.riskID;
  }

  get isLinkingObjectiveToRisk(): boolean {
    return !!this.data?.controlObjectiveID;
  }



  ngOnInit(): void {

    this.linkForm = this.fb.group({
      riskID: ['',this.isLinkingObjectiveToRisk ? Validators.required : []],
      controlObjectiveID: ['', this.isLinkingRiskToObjective ? Validators.required : []],
      justification: ['']

      

    });

    if (this.isLinkingRiskToObjective) {
      this.linkForm.patchValue({ riskID: this.data.riskID });
      this.fetchControlObjectives();
    }
    else if (this.isLinkingObjectiveToRisk) {
      this.linkForm.patchValue({ controlObjectiveID: this.data.controlObjectiveID });
      this.fetchRisks();
    }
  }

  fetchControlObjectives() {
    this.controlService.getControlObjectives().subscribe({
      next: (data) => (this.controlObjectives = data),
      error: (error) => console.error('Error fetching objectives', error)
    });
  }

  fetchRisks() {
    this.riskService.getAllRisks().subscribe({
      next: (data) => (this.risks = data),
      error: (error) => console.error('Error fetching risks', error)
    });
  }

  onSubmit() {
    if (this.linkForm.valid) {
      const formData = this.linkForm.value;
      console.log('Submitting Link:', formData);
      this.dialogRef.close(formData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  


  
}










