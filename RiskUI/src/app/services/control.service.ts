import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private objectivesUrl = 'http://localhost:3000/controlobjectives';
  private controlsUrl = 'http://localhost:3000/controls';
  private riskControlObjectivesUrl = 'http://localhost:3000/riskcontrolObjectives';



  constructor(private http: HttpClient) { }

  // Helper method for Authorization headers
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Get all control objectives
  getControlObjectives(): Observable<any[]> {
    return this.http.get<any[]>(this.objectivesUrl, {
      headers: this.getAuthHeaders()
    });
  }

  // Get all controls
  getControls(): Observable<any[]> {
    return this.http.get<any[]>(this.controlsUrl, {
      headers: this.getAuthHeaders()
    });
  }
  // link risk to control objective
  linkRisktocontrolobjective(linkData: any): Observable<any> {
    return this.http.post<any>(this.riskControlObjectivesUrl, linkData, {
      headers: this.getAuthHeaders()
    });
  }

}
