import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MitigationPlanService } from '../services/mitigation-plan.service';
import { RiskService } from '../services/risk.service';
import { UserService } from '../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-mitigation-plan-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatDialogModule, MatNativeDateModule, MatDatepickerModule, MatIconModule],
  templateUrl: './mitigation-plan-dialog.component.html',
  styleUrl: './mitigation-plan-dialog.component.css'
})
export class MitigationPlanDialogComponent implements OnInit {

  mitigationPlanForm: FormGroup;
  risks: any[] = [];
  users: any[] = [];
  status: string[] = ['Pending', 'In Progress', 'Completed', 'Cancelled'];

  constructor(
    private fb: FormBuilder,
    private mitigationPlanService: MitigationPlanService,
    private riskService: RiskService,
    private userService: UserService,
    public dialogRef: MatDialogRef<MitigationPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mitigationPlanForm = this.fb.group({
      riskID: ['', Validators.required],
      description: ['', Validators.required],
      planDetails: ['', Validators.required],
      assignedTo: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadRisks();
    this.loadUsers();
    if (this.data?.mitigationPlan) {
      this.mitigationPlanForm.patchValue(this.data.mitigationPlan);
    }
  }

  loadRisks(): void {
    this.riskService.getAllRisks().subscribe({
      next: (data) => this.risks = data,
      error: (error) => console.error('Error loading risks', error)
    });
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.users = data,
      error: (error) => console.error('Error loading users', error)
    });
  }

  onSubmit(): void {
    if (this.mitigationPlanForm.valid) {
      const formValue = this.mitigationPlanForm.value;
      if (this.data?.mitigationPlan) {
        this.mitigationPlanService.updateMitigationPlan(this.data.mitigationPlan._id, formValue).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) => console.error('Error updating mitigation plan', error)
        });
      } else {
        this.mitigationPlanService.createMitigationPlan(formValue).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) => console.error('Error creating mitigation plan', error)
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }



}
