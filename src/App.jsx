import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Fingerprint from '@mui/icons-material/Fingerprint';

import WeatherAppMain from './weatherAppMain';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

         <WeatherAppMain/>
       
    </>
  )
}

export default App
