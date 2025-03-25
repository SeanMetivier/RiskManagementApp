import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ControlService } from '../services/control.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RiskControlObjectiveComponent } from '../risk-control-objective/risk-control-objective.component';

@Component({
  selector: 'app-controlobjectives',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, RiskControlObjectiveComponent, MatDialogModule],
  templateUrl: './controlobjectives.component.html',
  styleUrl: './controlobjectives.component.css'
})
export class ControlobjectivesComponent implements OnInit {

  controlObjectives: any[] = [];
  controls: any[] = [];

  constructor(
    private controlService: ControlService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchControlObjectives();
    this.fetchControls();
  }

  fetchControlObjectives() {
    this.controlService.getControlObjectives().subscribe({
      next: (data) => {
        this.controlObjectives = data;
        console.log('Control Objectives:', data)
      },
      error: (error) => console.error('Error fetching control objectives', error)

    });
  }

  fetchControls() {
    this.controlService.getControls().subscribe({
      next: (data) => {
        this.controls = data;
        console.log( 'Controls: ', data);
      },
      error: (error) => console.error('Error fetching controls', error)
    });
  }

  openLinkDialog(controlObjective: any) {
    const dialogRef = this.dialog.open(RiskControlObjectiveComponent, {
      data: {
        controlObjectiveID: controlObjective._id

      }

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.controlService.linkRisktocontrolobjective(result).subscribe({
          next: () => console.log('Risk linked to control objective successfully'),
          error: (error) => console.error('Error linking risk to control objective', error)

        });

      }

    });

  }
}

