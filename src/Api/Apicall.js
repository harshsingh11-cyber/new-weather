export const getWeatherDataForCity = async (city) =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=af599650633a76299266cbe8b6e9a1c4&units=metric`)
    return await response.json();
};

export const getWeatherDataForLocation = async (lat,lon) =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=af599650633a76299266cbe8b6e9a1c4&units=metric`)
    return await response.json();
};