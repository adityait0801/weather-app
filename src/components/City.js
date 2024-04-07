import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/Contants";
import { Weather_API_KEY } from "../utils/key";

const City = () => {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState('');

  const API_KEY = Weather_API_KEY; 

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async() => {
        try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=$Delhi&units=metric&appid=${API_KEY}')
        const data = await response.json();
        setWeatherData(data);
        }
        catch (error) {
        setError(error.message);
      }
    };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      
      const data = await response.json();
      setWeatherData(data);
      
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };
 
    return (
        <div>
            <div>
                <img src={IMG_URL} alt="Weather-Image"/>
            </div>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex items-center">
                <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-300 w-64"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring focus:border-blue-300">Get Weather</button>
            </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
          <div className="mt-4 p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Current Weather in {weatherData.name}</h2>
            <p className="text-gray-700">Temperature: {weatherData.main.temp}°C</p>
            <p className="text-gray-700">Weather: {weatherData.weather[0].main}</p>
            <p className="text-gray-700">Description: {weatherData.weather[0].description}</p>
            <p className="text-gray-700">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-gray-700">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
    </div>
        </div>
    )
}

export default City;