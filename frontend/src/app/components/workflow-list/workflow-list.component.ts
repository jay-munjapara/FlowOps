import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html'
})
export class WorkflowListComponent implements OnInit {
  workflows: any[] = [];

  constructor(private workflowService: WorkflowService) {}

  ngOnInit(): void {
    this.workflowService.getWorkflows().subscribe(data => {
      this.workflows = data;
    });
  }
}