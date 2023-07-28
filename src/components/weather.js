import { useEffect, useState } from "react";
import "../styles/components/weather.css";
import { FaLocationArrow } from "react-icons/fa";

export default function Weather() {
    const API_KEY = process.env.REACT_APP_WEATHER_KEY;

    const [temp, setTemp] = useState();
    const [temp_max, setTemp_max] = useState();
    const [temp_min, setTemp_min] = useState();
    const [weather, setWeather] = useState();
    const [name, setName] = useState();
    const [humidity, setHumidity] = useState();

    const getCurrentLocation = () => {
        console.log(navigator.geolocation.getCurrentPosition);
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const name = data.name;
        setTemp(temp);
        setWeather(weather);
        setName(name);
        const temp_max = data.main.temp_max;
        const temp_min = data.main.temp_min;
        setTemp_max(temp_max);
        setTemp_min(temp_min);
        const humidity = data.main.humidity;
        setHumidity(humidity);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <>
            <div className="weather_container">
                <p className="weather_main">
                    {name}
                    <FaLocationArrow />
                </p>
                <p className="weather_main">{(temp - 273.15).toFixed(0)}℃</p>
                <div className="weather_box">
                    <p>최고:{(temp_max - 273.15).toFixed(0)}℃</p>
                    <p>최저:{(temp_min - 273.15).toFixed(0)}℃</p>
                    <p>습도: 💧{humidity}%</p>
                    <p>{weather}</p>
                </div>
            </div>
        </>
    );
}
