import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private apiUrl = 'http://localhost:3000/risks';

  constructor(private http: HttpClient) {}

  // Helper method to get HTTP headers with authorization token
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Get all risks
  getAllRisks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  // Get a specific risk by ID
  getRiskById(riskId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${riskId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Create a new risk
  createRisk(riskData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, riskData, {
      headers: this.getAuthHeaders()
    });
  }

  // Update an existing risk
  updateRisk(riskId: string, riskData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${riskId}`, riskData, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete a risk
  deleteRisk(riskId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${riskId}`, {
      headers: this.getAuthHeaders()
    });
  }

  
}
