import React from 'react'
import './SerchBox.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function InfoWeather({info}) {

  let imag_Url = "https://i.pinimg.com/736x/57/8e/12/578e12b981531180ca8a6c2f2a6feb66.jpg";

  return (
      <>
      <div className="infoDiv">
      <h1 style={{marginBottom:'2vw', color:'rgb(23,144,241'}}>City :{info.city != "" ? info.city  : " Not Searched Yet"} </h1>

      <Card  className='myInfoCard' style={{backgroundColor:'rgb(23,144,241'}}>

      <CardMedia
        sx={{ height: 350 }}
        image={imag_Url}
        title="green iguana"
      />
      <CardContent style={{ display:'flex', justifyContent:     'space-between',  color:'white', gap:'1.5vw'}}>

        <div className="first inpart">
          <h2>Temperature</h2>
          <p>{info.temp != "" ? info.temp  : "0"}°C</p>
        </div>
        <div className="second inpart">
          <h2>Max Temp </h2>
          <p>{info.tempMax != "" ? info.tempMax  : "0"}°C</p>
        </div>
        <div className="third inpart">
          <h2>Min Temp</h2>
          <p>{info.tempMin != "" ? info.tempMin  : "0"}°C</p>
        </div>
        <div className="fourth inpart">
          <h2>Humidity Level</h2>
         
          <p>{info.humidity != "" ? info.humidity  : "0"}°C</p>
        </div>
        <div className="fifth inpart">
          <h2>Weather Status</h2>
          <p>{info.weather != "" ? info.weather  : "Not Confirm"}</p>
        </div>
       
      </CardContent>

    </Card>
       </div>
      </>
  )
}

export default InfoWeather



