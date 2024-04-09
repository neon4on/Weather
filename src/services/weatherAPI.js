import axios from 'axios';

const API_KEY = '5502740c0d1dcd2454814a79a5eee4bd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
