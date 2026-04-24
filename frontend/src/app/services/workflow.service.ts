import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkflowService {
  private apiUrl = 'http://localhost:8080/api/workflows';

  constructor(private http: HttpClient) {}

  getWorkflows(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}