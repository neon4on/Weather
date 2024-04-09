import React from 'react';
import { Link } from 'react-router-dom';

function FavoriteCities() {
  const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

  return (
    <div>
      <h3>Выбранный город</h3>
      <ul>
        {favoriteCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCities;
