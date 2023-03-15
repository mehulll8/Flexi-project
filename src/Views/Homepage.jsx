import React from 'react'
import Navbar from '../Components/Navbar_'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,  Container } from 'react-bootstrap';
import UncontrolledExample from '../Components/carousel';

import Flexbox from '../Components/flexbox';




const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br></br><br></br>
      <Container style={{ marginTop: '100px' }}>
        <h1 className='m-auto'><b>Better clothing for the planet</b></h1>
        <br></br>
        <p className='m-auto p-auto'>Placeholder text here (will put our quote here)</p>
        <br></br>
        <Button variant="outline-primary" size="lg">Shop All</Button>
        <br></br>
        <br></br>
        <UncontrolledExample></UncontrolledExample>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Flexbox imageSrc="https://placehold.jp/200x100.png" altText="Image 1" />
        <Flexbox imageSrc="https://placehold.jp/200x100.png" altText="Image 2" />
        <Flexbox imageSrc="https://placehold.jp/200x100.png" altText="Image 3" />
        <Flexbox imageSrc="https://placehold.jp/200x100.png" altText="Image 4" />
      </div>

      <br></br>
      <br></br>
      <Container>
        <h1><b>Our latest arrivals</b></h1>
        <p>Placeholdder text 2 (Contains description of discount, new clothing etc)</p>
        <br></br>
        <Flexbox  imageSrc="https://placehold.jp/400x800.png" altText="Image 1"/>
        <Flexbox  imageSrc="https://placehold.jp/400x800.png" altText="Image 2"/>
        <Flexbox  imageSrc="https://placehold.jp/400x800.png" altText="Image 3"/>
      </Container>
    </div>
  )
}

export default Homepage
