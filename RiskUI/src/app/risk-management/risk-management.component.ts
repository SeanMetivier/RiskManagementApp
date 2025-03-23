import { Component, OnInit } from '@angular/core';
import { RiskService } from '../services/risk.service';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RiskDialogComponent } from '../risk-dialog/risk-dialog.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-risk-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './risk-management.component.html',
  styleUrl: './risk-management.component.css'
})
export class RiskManagementComponent implements OnInit {
  risks: any[] = [];

  displayedColumns: string[] = ['title', 'description', 'likelihood', 'impact', 'riskScore', 'actions'];

  constructor(private riskService: RiskService, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchRisks();

  }


  fetchRisks() {
    this.riskService.getAllRisks().subscribe({
      next: (data: any[]) => {
        console.log('Fetched risks:', data);
        this.risks = data;

      },
      error: (error: any) => {
        console.error('Error fetching risks:', error);
      }

    });
  }
  openCreateRiskDialog() {
    const dialogRef = this.dialog.open(RiskDialogComponent);


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.CreateRisk(result);
      }
    });
  }

  CreateRisk(riskData: any) {
    this.riskService.createRisk(riskData).subscribe({
      next: () => {
        this.fetchRisks(); // Refresh the risk list after creating a new risk
      },
      error: (error) => {
        console.error('Error creating risk:', error);
      }
    });

  }

  openEditDialog(risk: any) {
    const dialogRef = this.dialog.open(RiskDialogComponent, {
      data: {
        ...risk,
        riskOwner: risk.riskOwner?.username || ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.riskService.updateRisk(risk._id, result).subscribe({
          next: () => {
            this.fetchRisks(); // Refresh the risk list after updating
          },
          error: (error) => {
            console.error('Error updating risk:', error);
          }
        });
      }
    });
  }

  deleteRisk(riskId: string) {

    if (confirm('Are you sure you want to delete this risk?')) {
    
    this.riskService.deleteRisk(riskId).subscribe({
      next: () => {
        this.fetchRisks(); // Refresh the risk list after deletion
      },
      error: (error) => {
        console.error('Error deleting risk:', error);
      }
    });
  }

  }
}
