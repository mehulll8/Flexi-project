import React from 'react'
import Navbar from '../Components/Navbar_'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,  Container } from 'react-bootstrap';
import UncontrolledExample from '../Components/carousel';



const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br></br><br></br>
      <Container>
        <h1 className='m-auto'><b>Better clothing for the planet</b></h1>
        <br></br>
        <p className='m-auto p-auto'>Placeholder text here (will put our quote here)</p>
        <br></br>
        <Button variant="outline-primary" size="lg">Shop All</Button>
        <br></br>
        <br></br>
        <UncontrolledExample></UncontrolledExample>
      </Container>
    </div>
  )
}

export default Homepage
