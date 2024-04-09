import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherByCity } from '../services/weatherAPI';

function WeatherInfo() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchWeatherData();
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
      <p>Температура: {weatherData.main.temp}°C</p>
      <p>Описание: {weatherData.weather[0].description}</p>
      {/* Отобразите другие данные о погоде */}
    </div>
  );
}

export default WeatherInfo;
