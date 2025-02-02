import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import './style.css'



const Temp = () => {
  const [searchValue,setSearchValue] = useState('Jaipur') ;
  const [tempInfo,setTempInfo] = useState({});
  const getWeatherInfo = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=121663ab2a4bc9a420a4d28128de3e78&units=metric`;

      const res = await fetch(url);
      const data = await res.json();


      const { temp , humidity, pressure} = data.main;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      }
      setTempInfo(myNewWeatherInfo)

    }
    catch(error){
       console.log(error);
    }
  }
  useEffect(() => {
    getWeatherInfo();
  }, [])

  const Submit = (ev)=>{
    if(ev.key === "Enter"){
      getWeatherInfo();
    } 
  }
  
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" 
           placeholder='search...'
           autoFocus
           id='search'
           className='searchTerm'
           value={searchValue}
           onChange={(e)=> setSearchValue(e.target.value)}
           onKeyDown={Submit}
           />
           <button className='searchButton'
            type = "button" 
            onClick={getWeatherInfo}
            >
           Search
           </button>
        </div>
      </div>
      {/* out temp card */}
      <WeatherCard {...tempInfo}/>
    </>
  )
}

export default Temp
