import React, { useEffect, useState } from 'react';
import { apiRequest } from '../api/axios';

interface BorrowRecord {
  id: number;
  memberName: string;
  bookTitle: string;
  borrowedAt: string;
  dueDate: string;
  returned: boolean;
}

export default function Borrow() {
  const [records, setRecords] = useState<BorrowRecord[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await apiRequest('GET', '/borrow-records');
        setRecords(data); // adjust if API returns { records: [...] }
      } catch (err) {
        console.error('Error fetching borrow records:', err);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Borrow Records</h2>
      <div className="row g-3">
        {records.map((record) => (
          <div className="col-md-6 col-lg-4" key={record.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{record.bookTitle}</h5>
                <p className="card-text">
                  <strong>Member:</strong> {record.memberName} <br />
                  <strong>Borrowed At:</strong> {record.borrowedAt} <br />
                  <strong>Due Date:</strong> {record.dueDate} <br />
                  <strong>Status:</strong> {record.returned ? 'Returned' : 'Pending'}
                </p>
                <button className="btn btn-success btn-sm me-2">Return</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
