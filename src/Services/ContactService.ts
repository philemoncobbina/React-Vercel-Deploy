import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/contacts/';

export const submitContactForm = async (data) => {
  try {
    const response = await axios.post(`${API_URL}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
