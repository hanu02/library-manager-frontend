import React, { useEffect, useState } from 'react';
import { apiRequest } from '../api/axios';

interface Member {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await apiRequest('GET', '/members');
        setMembers(data); // adjust if API returns { members: [...] }
      } catch (err) {
        console.error('Error fetching members:', err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Members</h2>
      <div className="row g-3">
        {members.map((member) => (
          <div className="col-md-6 col-lg-4" key={member.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {member.email} <br />
                  {member.phone && (
                    <>
                      <strong>Phone:</strong> {member.phone}
                    </>
                  )}
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
