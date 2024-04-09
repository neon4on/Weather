import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import FavoriteCities from './components/FavoriteCities';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Weather App</h1>
        <SearchBar />
        <FavoriteCities />

        <Routes>
          <Route path="/city/:cityName" element={<WeatherInfo />} />
          <Route path="/" element={null} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
