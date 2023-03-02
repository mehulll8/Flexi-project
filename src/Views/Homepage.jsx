import React from 'react'
import Navbar from '../Components/Navbar_'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br></br><br></br>
      <h1 className='m-auto'><b>Better clothing for the planet</b></h1>
      <br></br>
      <p className='m-auto p-auto'>Placeholder text here (will put our quote here)</p>
    </div>
  )
}

export default Homepage
