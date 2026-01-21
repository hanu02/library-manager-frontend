// src/pages/Dashboard.tsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>
          Admin Dashboard{" "}
          <span className="badge bg-danger">ADMINISTRATOR</span>
        </h1>
      </div>

      <div className="alert alert-danger" role="alert">
        <strong>Administrator Access</strong> - You have full system privileges
        including delete operations, genre management, and staff administration.
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text text-muted">Total Books</p>
              <h3 className="card-title">1250</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text text-muted">Total Members</p>
              <h3 className="card-title">340</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text text-muted">Active Borrows</p>
              <h3 className="card-title">89</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text text-muted">Overdue Books</p>
              <h3 className="card-title text-danger">12</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-dark flex-fill">Borrow Book</button>
        <button className="btn btn-dark flex-fill">Return Book</button>
        <button className="btn btn-dark flex-fill">Add Member</button>
        <button className="btn btn-dark flex-fill">Add Book</button>
      </div>
    </div>
  );
};

export default Dashboard;
