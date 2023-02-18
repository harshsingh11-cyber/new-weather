import './App.css';
import Teamp from './Components/Teamp';
import { useEffect } from 'react';
import { useWeather } from './Context/WeatherData';


function App() {
 const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentLoc();
  },[]);
  return (
    <div className="App">
     <Teamp/>
    </div>
  );
}

export default App;
