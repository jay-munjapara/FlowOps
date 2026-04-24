package com.flowops.model;

public class ApprovalRequest {
    private Long id;
    private String requestName;
    private String status;

    public ApprovalRequest() {}

    public ApprovalRequest(Long id, String requestName, String status) {
        this.id = id;
        this.requestName = requestName;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRequestName() { return requestName; }
    public void setRequestName(String requestName) { this.requestName = requestName; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}