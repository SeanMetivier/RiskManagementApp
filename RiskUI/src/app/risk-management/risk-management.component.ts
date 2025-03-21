import { Component, OnInit } from '@angular/core';
import { RiskService } from '../services/risk.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-risk-management',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './risk-management.component.html',
  styleUrl: './risk-management.component.css'
})
export class RiskManagementComponent implements OnInit {
  risks: any[] =[];

  constructor(private riskService: RiskService) { }

  ngOnInit(){
    this.fetchRisks();

  }
  

  fetchRisks() {
    this.riskService.getAllrisks().subscribe({
      next: (data: any[]) => {
        console.log('Fetched risks:', data);
        this.risks = data;

    },
      error: (error:any) => {
        console.error('Error fetching risks:', error);
      }
      
    });
  }
  
}
