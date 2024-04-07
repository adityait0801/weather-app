import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/Contants";
import { Weather_API_KEY } from "../utils/key";

const City = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState("");
  
    const API_KEY = Weather_API_KEY;
  
    useEffect(() => {
      fetchWeatherData();
    }, []);
  
    const fetchWeatherData = async (cityName) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        );
  
        if (!response.ok) {
          throw new Error("City not found");
        }
  
        const data = await response.json();
        setWeatherData((prevData) => [...prevData, data]);
      } catch (error) {
        setError(error.message);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim() !== "") {
        fetchWeatherData(city.trim());
        setCity("");
      }
    };
  
    const removeCity = (index) => {
      setWeatherData((prevData) => {
        const newData = [...prevData];
        newData.splice(index, 1);
        return newData;
      });
    };
  
    return (
      <div>
        <div>
          <img
            className="h-full w-full absolute"
            src={IMG_URL}
            alt="Weather-Image"
          />
        </div>
        <div className="absolute h-screen flex flex-col justify-center items-center right-0 left-0 text-black bg-opacity-10">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-lg p-2 w-64"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Get Weather
            </button>
          </form>
          <div className="flex flex-wrap justify-center m-2">
          {weatherData.map((cityData, index) => (
            <div
              key={index}
              className="mt-4 p-4 border border-gray-300 rounded-lg "
            >
              <h2 className="text-2xl font-bold mb-2">
                Current Weather in {cityData.name}
              </h2>
              <p className="text-black font-bold">
                Temperature: {cityData.main.temp}°C
              </p>
              <p className="text-black font-bold">
                Weather: {cityData.weather[0].main}
              </p>
              <p className="text-black font-bold">
                Description: {cityData.weather[0].description}
              </p>
              <p className="text-black font-bold">
                Humidity: {cityData.main.humidity}%
              </p>
              <p className="text-black font-bold">
                Wind Speed: {cityData.wind.speed} m/s
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded items-center"
                onClick={() => removeCity(index)}
              >
                Remove
              </button>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default City;
  