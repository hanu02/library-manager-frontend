// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../api/axios'; 


export default function Login({ setIsLoggedIn }: { setIsLoggedIn: (loggedIn: boolean) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const res = await apiRequest('POST', '/auth/login', { email, password });
      console.log('Login Response:', res);

      if (res.access_token) {
        localStorage.setItem('token', res.access_token); // save token
        setIsLoggedIn(true);                              // update App state
        navigate('/');                                     // redirect to dashboard
      } else {
        setError('Login failed: no token received');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setError('Email or password is incorrect');
      } else {
        setError('Server error. Try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Login</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); if (error) setError(''); }}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ padding: '0.5rem 1rem' }}
      >
        {loading ? 'Logging in...' : 'Sign In'}
      </button>
       {/* Credentials Info at the bottom */}
        <div className="alert alert-info text-center mt-3 mb-0">
          Test Credentials: <br />
          <strong>Email:</strong> han@gmail.com <br />
          <strong>Password:</strong> 123456
        </div>
    </div>
  );
}
