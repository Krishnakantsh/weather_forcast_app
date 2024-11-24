import React, { useState } from 'react'
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import InfoWeather from './InfoWeather';
import './App.css'

function WeatherAppMain() {


 let [weatherInfo , SetWeatherInfo] = useState({

  city :"",
  temp :"",
  tempMin: "",
  tempMax: "",
  feelslike:"",
  humidity :"",
  weather : ""
 });
  
 let updateInfoo = ((newInfo)=>{
  SetWeatherInfo(newInfo)
 })


  return (
    <>
      <div className="container" style={{width:'100%'}}>
         <Navbar/>
         <SearchBox updateInfo={updateInfoo} />
         <InfoWeather info={weatherInfo}/>
         </div>
    </>
  )
}

export default WeatherAppMain