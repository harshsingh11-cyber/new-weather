import { createContext, useContext ,useState} from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../Api/Apicall";
const WeatherContext = createContext(null);


export const useWeather = () => {
    return useContext(WeatherContext);
}


export const WeatherProvider = (props) => {

const [data,setData] = useState(null);
const [searchCity,setSearchCity] = useState(null);



const featchData = async() => {
const responce = await getWeatherDataForCity(searchCity)
// console.log(responce);
setData(responce);
};

const fetchCurrentLoc = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
        ).then(data => setData(data));
    });
};

    return <WeatherContext.Provider value={{searchCity, data, setSearchCity, featchData,fetchCurrentLoc}}>{props.children} </WeatherContext.Provider>
};