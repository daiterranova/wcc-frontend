import axios from 'axios';

const apiBaseUrl = process.env.API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error('Base URL is missing, check your env file');
}

export const fetchData = async (path: string) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${path}`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
