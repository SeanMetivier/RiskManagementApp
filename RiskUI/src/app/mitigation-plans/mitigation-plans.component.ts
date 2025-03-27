import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MitigationPlanService } from '../services/mitigation-plan.service';
import { RouterModule } from '@angular/router';
import { MitigationPlanDialogComponent } from '../mitigation-plan-dialog/mitigation-plan-dialog.component';
import { MitigationPlanCommentsComponent } from '../mitigation-plan-comments/mitigation-plan-comments.component';

@Component({
  selector: 'app-mitigation-plans',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule, RouterModule],
  templateUrl: './mitigation-plans.component.html',
  styleUrl: './mitigation-plans.component.css'
})
export class MitigationPlansComponent implements OnInit {

  mitigationPlans: any[] = [];
  displayedColumns: string[] = ['risk', 'description', 'assignedTo', 'status', 'dueDate', 'actions'];

  constructor(
    private mitigationPlanService: MitigationPlanService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchMitigationPlans();
  }

  fetchMitigationPlans() {
    this.mitigationPlanService.getAllMitigationPlans().subscribe({
      next: (data) => {
        this.mitigationPlans = data;
      },
      error: (error) => {
        console.error('Error fetching mitigation plans:', error);
      }
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(MitigationPlanDialogComponent,{
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchMitigationPlans();
      }
    });
  }

  editPlan(plan: any) {
    const dialogRef = this.dialog.open(MitigationPlanDialogComponent, {
      width: '600px',
      data: { mitigationPlan: plan }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchMitigationPlans();
      }
    });
  }

  deletePlan(planId: string) {
    if (confirm('Are you sure you want to delete this mitigation plan?')) {
      this.mitigationPlanService.deleteMitigationPlan(planId).subscribe({
        next: () => {
          this.fetchMitigationPlans();
        },
        error: (error) => {
          console.error('Error deleting mitigation plan:', error);
        }
      });
    }
  }

  viewComments(plan: any) {
    this.dialog.open(MitigationPlanCommentsComponent, {
      width: '600px',
      data: { mitigationPlanID: plan._id}
    }

    )
  }
}

