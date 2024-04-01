import React from 'react'
import { useEffect, useState } from 'react';

const WeatherCard = ( {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  }) => {

    const [weatherState , setWeatherState] = useState("");

    // const {
    //     temp,
    //     humidity,
    //     pressure,
    //     weathermood,
    //     name,
    //     speed,
    //     country,
    //     sunset
    //   } = tempInfo;

      useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    
                    break;
                case "Haze": setWeatherState("wi-fog");
                    
                    break;
                case "clear": setWeatherState("wi-day-sunny");
                    
                    break;
                case "rain": setWeatherState("wi-day-rain");
                    
                    
                    break;
                case "mist": setWeatherState("wi-raindrops");
                    
                    break;

                case "Snow": setWeatherState("wi-snow");

                  break;

                case "Fog":  setWeatherState("wi-day-fog");
                    
                    break;


            
                default: setWeatherState("wi-day-sunny");
                    break;
            }
        }
      }, [weathermood])
      

    //   converting seconds into time for sunset value 

    let sec = sunset;
    let date = new Date (sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
      <article className='widget'>
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span> {(Math.round((temp*10))/10)}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
          <div className="date"> {new Date().toLocaleString()} </div>
         {/* our four column section  */}
         <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p><i className={"wi wi-sunset"}></i></p>
              <p className="extra-info-leftside">
                {timeStr}<br />
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          
          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p><i className={"wi wi-rain"}></i></p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
         </div>
      </article>
    </>
  )
}

export default WeatherCard
