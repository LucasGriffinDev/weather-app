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
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    }
  };
  //sydney coordinates
  let city = 'sydney';
  let state = 'nsw';
  let country = 'au';
  const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${apiKey}`;
  let lat = -33.8688;
  let lon = 151.2093;
  const urlLongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>sydney</p>
          </div>
          <div className="temp">
            <h1>28 degrees</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">22</p>
            <p>Feeks like:</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity:</p>
          </div>
          <div className="wind">
            <p className="bold">12mph</p>
            <p>Wind:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
