import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private apiUrl = 'http://localhost:3000/risks';


  constructor(private http: HttpClient ) {}

  getAllrisks(): Observable <any[]>{

    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
    
  }
}
