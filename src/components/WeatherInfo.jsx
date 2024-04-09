import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherByCity, getTemperatureDataByCity } from '../services/weatherAPI';
import TemperatureChart from './TemperatureChart';

function WeatherInfo() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      setWeatherData(null);

      try {
        const data = await getWeatherByCity(cityName);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchTemperatureData = async () => {
      try {
        const data = await getTemperatureDataByCity(cityName);
        setTemperatureData(data);
      } catch (error) {
        console.error('Error fetching temperature data:', error);
      }
    };

    fetchWeatherData();
    fetchTemperatureData();
  }, [cityName]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Такой город не был найден</div>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <TemperatureChart temperatureData={temperatureData} />
    </div>
  );
}

export default WeatherInfo;
