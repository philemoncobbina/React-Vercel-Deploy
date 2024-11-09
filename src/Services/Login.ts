import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
  };
}

interface LoginResult {
  success: boolean;
  error?: string;
}

export const login = async (email: string, password: string): Promise<LoginResult> => {
  console.log('Attempting to log in with email:', email);

  try {
    const response = await axios.post<LoginResponse>('http://127.0.0.1:8000/api/login/', { email, password });
    const { access_token, user } = response.data;

    console.log('Received access token:', access_token);
    console.log('Received user info:', user);

    // Save access token to local storage
    localStorage.setItem('access_token', access_token);

    console.log('Login successful. Access token saved to local storage.');
    return { success: true };
  } catch (error: any) {
    console.error('Login failed:', error.response?.data?.error || error.message);

    let errorMessage = 'An unknown error occurred';
    if (error.response && error.response.data) {
      errorMessage = error.response.data.error;
    }

    return { success: false, error: errorMessage };
  }
};

export const logout = async (navigate: ReturnType<typeof useNavigate>): Promise<void> => {
  console.log('Attempting to log out...');
  try {
    const headers = getAuthHeaders();
    await axios.post('http://127.0.0.1:8000/api/logout-auth/', {}, { headers });

    localStorage.removeItem('access_token');
    console.log('Logged out successfully. Access token removed from local storage.');

    // Redirect to login page after successful logout
    navigate('/');
  } catch (error) {
    console.error('Logout failed:', error.response?.data || error.message);
  }
};

export const isLoggedIn = async (): Promise<{ loggedIn: boolean; user?: { id: number; email: string; role?: string } }> => {
  try {
    const headers = getAuthHeaders();
    const response = await axios.get('http://127.0.0.1:8000/api/session-check/', { headers });

    const { authenticated, user } = response.data;
    if (authenticated) {
      console.log('User is authenticated:', user);
      return { loggedIn: true, user };
    }
  } catch (error) {
    console.error('Session check failed:', error.response?.data || error.message);
  }

  console.log('User is not logged in or session check failed.');
  return { loggedIn: false };
};

export const getAuthHeaders = (): { Authorization: string } => {
  const accessToken = localStorage.getItem('access_token');
  return { Authorization: `Bearer ${accessToken}` };
};

export const fetchData = async (url: string) => {
  try {
    const headers = getAuthHeaders();
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};
