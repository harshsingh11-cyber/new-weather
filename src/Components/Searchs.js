import React, { useState } from 'react';
import { useWeather } from '../Context/WeatherData';
import './Searchs.css';

function Searchs() {
  const weather = useWeather();
  console.log(weather); 

  const [isLoading, setIsLoading] = useState(false);

  const buttonHandler = () => {
    setIsLoading(current => !current)
    console.log(isLoading) // is false 
  }
  return (
    <div className='all'> 

   
    <div className="teamp__search">
      <div className="search__input">
        <input
          className='input_field'
          type="text"
          value={weather.searchCity}
          placeholder='Search your city'
          onChange={(e) => weather.setSearchCity(e.target.value)}
        />
        <div>
          <button className="btn" onClick={weather.featchData}> Search</button>
        </div>
      </div>

      <div className="input__loc">
        <h2>{weather.data?.city.name}</h2>
        <h4>{weather.data?.list[0]?.weather[0].description}</h4>
      </div>
      <div className="input__data">
        <div className='data'>
          <p>Temp</p>
          <p>{weather.data?.list[0]?.main?.temp} C</p>
        </div>
        <div className='data'>
          <p>humidity</p>
          <p> {weather.data?.list[0]?.main?.humidity}</p>
        </div>
        <div className='data'>
          <p>Pressure</p>
          <p> {weather.data?.list[0]?.main?.pressure}</p>
        </div>
      </div>
      <button className='btn1' onClick={buttonHandler}>Add - Fav</button>
      <h2 className='forecast-1'>4 day's forecast </h2>
      <div className="curr__forecast">
      
            <div className="fore">
            <h3>{weather.data?.list[1]?.weather[0].description}</h3>
            <p>Temp</p>
              <p> {weather.data?.list[1]?.main?.temp} C</p>
            </div>
            <div className="fore">
            <h3>{weather.data?.list[2]?.weather[0].description}</h3>
            <p>Temp</p>
              <p> {weather.data?.list[2]?.main?.temp} C</p>
            </div>
            <div className="fore">
            <h3>{weather.data?.list[3]?.weather[0].description}</h3>
            <p>Temp</p>
              <p> {weather.data?.list[3]?.main?.temp} C</p>
            </div>
            <div className="fore">
            <h3>{weather.data?.list[4]?.weather[0].description}</h3>
            <p>Temp</p>
              <p> {weather.data?.list[4]?.main?.temp} C</p>
            </div>
          </div>
          </div>
          <div className="teamp__fav" style={{display: isLoading ? 'block' : 'none'}}>
          <p>Favorites - location</p>
          <div className="fav__loc">
            <h3>{weather.data?.city.name}</h3>
            <h5>{weather.data?.list[0]?.weather[0].description}</h5>
            <p>{weather.data?.list[0]?.main?.temp} C</p>
          </div>
        </div>


    </div>
  )
}

export default Searchs;
