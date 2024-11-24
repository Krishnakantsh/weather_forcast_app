import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SerchBox.css'
import { useState } from 'react';

function SearchBox({updateInfo}) {
  let [city , setCity]= useState("");

  const Api_Url = "https://api.openweathermap.org/data/2.5/weather"
  const Api_Key = "b5c69be1ca9a704d8867cde70bf8b79b"

  let getWeatherInfo = async ()=>{

     let info = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);

     let jsonResponse  = await  info.json();

    let result = {
        city:city,
        temp :jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelslike:jsonResponse.main.feels_like,
        humidity : jsonResponse.main.humidity,
        weather : jsonResponse.weather[0].description
     }
     return result;
  }

  let citychangeHandler = (event )=>{
       setCity(event.target.value)
  }

  let formSubmitHandler = async (evt)=>{
      evt.preventDefault();
      setCity("")
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
  }

  return (

    <>
    <div className='searchBox'>
      <h1 style={{color:'rgb(23,144,241'}}>Enter your city name to know today weather status </h1> 
    <br />
    <form  onSubmit={formSubmitHandler}>
    <TextField id="standard-basic" label="City-Name" placeholder='Enter city name' variant="outlined"  onChange={citychangeHandler} value={city} required/>
    <Button style={{marginLeft:'2vw', height:'3vw'}} variant="contained" size='large' endIcon={<SendIcon />} type='submit'>Search</Button>
    </form>

    </div>

    </>
  )
}

export default SearchBox