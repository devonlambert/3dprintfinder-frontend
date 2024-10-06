import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export const getPrints = async () => {
  try {
    const response = await axios.get(`${API_URL}/prints`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prints:', error);
    throw error;
  }
};

export const createPrint = async (printData) => {
  try {
    const response = await axios.post(`${API_URL}/prints`, printData);
    return response.data;
  } catch (error) {
    console.error('Error creating print:', error);
    throw error;
  }
};

// Add similar functions for update and delete operations
