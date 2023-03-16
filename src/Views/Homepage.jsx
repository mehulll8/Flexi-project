import React from 'react'
import Navbar from '../Components/Navbar_'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,  Col,  Container, Image, Row } from 'react-bootstrap';
import UncontrolledExample from '../Components/carousel';

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br/><br/>
      <Container style={{ marginTop: '100px' }}>
        <Row className='mb-4' style={{ scrollSnapAlign: 'start' }}>
          <Col sm='auto' xs='auto' md='auto' lg='auto'>
            <h1 className='m-auto'><b>Better clothing for the planet</b></h1>
            <br />
            <p className='m-auto p-auto'>Placeholder text here (will put our quote here)</p>
            <br />
            <Button variant='outline-primary' size='lg'>Shop All</Button>
            <UncontrolledExample />
          </Col>
        </Row>
        <Row className='justify-content-center mb-4' style={{ scrollSnapAlign: 'center' }}>
          <Col sm='auto' xs='auto' md='auto' lg='auto' className='d-flex justify-content-around'>
            <Image src='https://placehold.jp/200x100.png' altText='Image 1' className='mr-2 ml-2' />
            <Image src='https://placehold.jp/200x100.png' altText='Image 2' className='mr-2 ml-2' />
            <Image src='https://placehold.jp/200x100.png' altText='Image 3' className='mr-2 ml-2' />
            <Image src='https://placehold.jp/200x100.png' altText='Image 4' className='mr-2 ml-2' />
          </Col>
        </Row>
        <Row className='mb-4' style={{ scrollSnapAlign: 'start' }}>
          <Col className='text-center'>
            <h1 className='m-auto'><b>Our latest arrivals</b></h1>
            <p className='m-auto'>Placeholdder text 2 (Contains description of discount, new clothing etc)</p>
          </Col>
        </Row>
        <Row className='justify-content-center mb-4' style={{ scrollSnapAlign: 'center' }}>
          <Col sm='auto' xs='auto' md='auto' lg='auto' className='d-flex justify-content-around'>
            <Image  src="https://placehold.jp/400x800.png" altText="Image 1" className='mr-2 ml-2'/>
            <Image  src="https://placehold.jp/400x800.png" altText="Image 2" className='mr-2 ml-2'/>
            <Image  src="https://placehold.jp/400x800.png" altText="Image 3" className='mr-2 ml-2'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
