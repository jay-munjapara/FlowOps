package com.flowops.controller;

import com.flowops.model.ApprovalRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workflows")
@CrossOrigin(origins = "*")
public class WorkflowController {

    @GetMapping
    public List<ApprovalRequest> getAllWorkflows() {
        return List.of(
            new ApprovalRequest(1L, "Expense Approval", "Pending"),
            new ApprovalRequest(2L, "Leave Request", "Approved")
        );
    }
}