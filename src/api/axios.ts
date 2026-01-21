// src/api/axios.ts
import axios from 'axios';

// Helper function to make API requests with token
export const apiRequest = async (method: string, url: string, data: any = null) => {
  try {
    const token = localStorage.getItem('token'); // get token from localStorage

    const res = await axios({
      method: method,                     // GET, POST, PUT, DELETE
      url: `http://localhost:3000${url}`, // backend URL
      data: data,                         // data for POST/PUT
      headers: {
        Authorization: token ? `Bearer ${token}` : '', // send token if exists
      },
    });

    return res.data; // return backend response
  } catch (err) {
    console.error('API Request Error:', err);
    throw err; // let the caller handle errors
  }
};
