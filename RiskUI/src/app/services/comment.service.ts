import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:3000/comments'

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Get comments for a specific mitigation plan
  getCommentsByMitigationPlanID(planID: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mitigationPlan/${planID}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Add a new comment
  createComment(commentData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, commentData, {
      headers: this.getAuthHeaders()
    });
  }

  // Update a comment
  updateComment(commentID: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${commentID}`, updatedData, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete comment
  deleteComment(commentID: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${commentID}`, {
      headers: this.getAuthHeaders()
    });
  }
}


