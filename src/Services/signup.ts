import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/signup/'; // Replace with your actual backend URL

interface SignUpData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const getErrorMessage = (error: any): string => {
  if (error.response?.data) {
    if (typeof error.response.data === 'string') {
      return error.response.data;
    } else if (typeof error.response.data === 'object' && error.response.data.error) {
      return error.response.data.error;
    } else {
      return JSON.stringify(error.response.data);
    }
  }
  return error.message || 'Something went wrong';
};

export const signUp = async (data: SignUpData) => {
  try {
    const response = await axios.post(API_BASE_URL, data);
    const successMessage = response.data.message || 'Sign up successful!';
    return { success: true, message: successMessage, data: response.data }; // Return success flag, message, and data
  } catch (error) {
    console.error('Sign up error:', error);
    const errorMessage = getErrorMessage(error);
    return { success: false, error: errorMessage }; // Return error message
  }
};
