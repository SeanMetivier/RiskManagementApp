import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MitigationPlanService {

  private apiUrl = 'http://localhost:3000/mitigationPlans';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Get all mitigation plans
  getAllMitigationPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  // Get mitigation plan by ID
  getMitigationPlanById(planId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${planId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Get mitigation plans for a specific risk
  getPlansByRiskID(riskId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/risk/${riskId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Get mitigation plans assigned to a specific user
  getPlansByAssignedUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/assignedTo/${userId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Create a new mitigation plan
  createMitigationPlan(planData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, planData, {
      headers: this.getAuthHeaders()
    });
  }

  // Update a mitigation plan
  updateMitigationPlan(planId: string, planData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${planId}`, planData, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete a mitigation plan
  deleteMitigationPlan(planId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${planId}`, {
      headers: this.getAuthHeaders()
    });
  }
}



