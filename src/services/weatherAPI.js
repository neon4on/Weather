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

export const getTemperatureDataByCity = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const temperatureData = response.data.list
      .filter((data) => data.dt_txt.includes('12:00:00'))
      .map((data) => ({
        date: data.dt_txt.split(' ')[0],
        temperature: data.main.temp,
      }))
      .slice(0, 5);
    return temperatureData;
  } catch (error) {
    console.error('Error fetching temperature data:', error);
    throw error;
  }
};
