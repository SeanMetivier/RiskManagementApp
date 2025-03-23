import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-risk-dialog',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './risk-dialog.component.html',
  styleUrl: './risk-dialog.component.css'
})
export class RiskDialogComponent {
  riskForm: FormGroup;

  likelihoodOptions = ['Frequent', 'Likely', 'Occasional', 'Seldom', 'Unlikely'];
  impactOptions = ['Catastrophic', 'Critical', 'Moderate', 'Minor', 'Negligible'];
  statusOptions = ['Active', 'Occurred', 'Mitigated'];
  categoryOptions = ['Financial', 'Operational', 'Strategic', 'Compliance', 'Security'];





  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RiskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {


    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Stored User:', storedUser);

    this.riskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      likelihood: ['', Validators.required],
      impact: ['', Validators.required],
      category: ['', Validators.required],
      status: ['Active', Validators.required],
      riskOwner: ['', Validators.required],
      createdBy: [storedUser.userID || ''],
      organizationID: [storedUser.organizationID || ''],

    });

    if (data) {
      this.riskForm.patchValue({
        ...data,
        riskOwner: typeof data.riskOwner === 'object' ? data.riskOwner.username : data.riskOwner
      });
    }
  }


  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log("submit clicked")
    if (this.riskForm.valid) {
      const formValue = this.riskForm.value;

      const finalData = {
        ...formValue,
        riskOwner: typeof formValue.riskOwner === 'object' ? formValue.riskOwner.username.trim() : formValue.riskOwner?.trim(),
        createdBy: typeof formValue.createdBy === 'object' ? formValue.createdBy._id : formValue.createdBy,
        organizationID: typeof formValue.organizationID === 'object' ? formValue.organizationID._id : formValue.organizationID,
      };

      console.log('Submitting Risk:', finalData);
      this.dialogRef.close(finalData);
    }

  }
}
