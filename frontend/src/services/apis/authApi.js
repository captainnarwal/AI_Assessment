import axios from 'axios';

const API = axios.create({
  baseURL: 'https://example.com/api', // Replace with your backend API
});

// Mock the login function to return the given token
export const login = async (credentials) => {
  console.log('Mock API hit with credentials:', credentials);

  // Pretend to hit the API and return a mock response
  return {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDA3Nzc3NyIsInVzZXJfcm9sZXMiOlsiY2FuZGlkYXRlIl0sImV4cGlyZXNfYXQiOjE3MDQ0ODEzNTJ9.rVPN07V1g_es-nZbNQGZ6zkmCZFTiG5mSJ2hyLEoEiw',
    user: {
      id: '1000077777',
      roles: ['candidate'],
      expires_at: 1704481352,
    },
  };
};

export default API;
