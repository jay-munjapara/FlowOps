import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Workflow {
  id: number;
  requestName: string;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FlowOps';
  workflows: Workflow[] = [];
  filteredWorkflows: Workflow[] = [];
  searchTerm = '';
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadWorkflows();
  }

  loadWorkflows(): void {
    this.loading = true;
    this.error = '';

    this.http.get<Workflow[]>('http://localhost:8080/api/workflows').subscribe({
      next: (data) => {
        this.workflows = data;
        this.filteredWorkflows = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load workflows. Please check if the backend is running.';
        this.loading = false;
      }
    });
  }

  filterWorkflows(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredWorkflows = this.workflows.filter((workflow) =>
      workflow.requestName.toLowerCase().includes(term) ||
      workflow.status.toLowerCase().includes(term) ||
      workflow.id.toString().includes(term)
    );
  }

  getStatusClass(status: string): string {
    const s = status.toLowerCase();

    if (s === 'approved') return 'status approved';
    if (s === 'pending') return 'status pending';
    if (s === 'rejected') return 'status rejected';
    return 'status default';
  }

  getTotalCount(): number {
    return this.workflows.length;
  }

  getPendingCount(): number {
    return this.workflows.filter(w => w.status.toLowerCase() === 'pending').length;
  }

  getApprovedCount(): number {
    return this.workflows.filter(w => w.status.toLowerCase() === 'approved').length;
  }

  getRejectedCount(): number {
    return this.workflows.filter(w => w.status.toLowerCase() === 'rejected').length;
  }
}