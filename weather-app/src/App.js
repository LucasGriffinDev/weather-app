import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const apiKey = '1aed1d3e4d7ab69316069bdf85836707';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
      setLocation('');
    }
  };
  //sydney coordinates

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter a city"
          type="text"
          className="input"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(data.main.temp)} °C</h1> : ''}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : ''}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{Math.floor(data.main.feels_like)} °C</p>
            ) : (
              ''
            )}

            <p>Feeks like:</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}</p> : ''}
            <p>Humidity:</p>
          </div>
          <div className="wind">
            <p className="bold">
              {data.wind ? Math.floor(data.wind.speed) + ' km/h' : ''}
            </p>
            <p>Wind:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
