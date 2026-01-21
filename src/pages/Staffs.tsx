import { useEffect, useState } from 'react';
import { apiRequest } from '../api/axios';

interface Staff {
  id: number;
  username: string;
  email: string;
  role: string;
}

export default function Staffs() {
  const [staffs, setStaffs] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const data = await apiRequest('GET', '/staff');
        setStaffs(data); // adjust if API returns { staffs: [...] }
      } catch (err) {
        console.error('Error fetching staffs:', err);
      }
    };
    fetchStaffs();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Staff Members</h2>
      <div className="row g-3">
        {staffs.map((staff) => (
          <div className="col-md-6 col-lg-4" key={staff.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{staff.username}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {staff.email} <br />
                  <strong>Role:</strong> {staff.role}
                </p>
                <button className="btn btn-primary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
