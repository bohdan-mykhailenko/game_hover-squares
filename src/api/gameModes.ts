import axios from 'axios';
import { API_URL } from '../consts/api-url';
import { Mode } from '../types/Mode';

export const getModes = async (): Promise<Mode[]> => {
  try {
    const response = await axios.get(`${API_URL}/modes`);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
