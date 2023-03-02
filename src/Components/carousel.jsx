import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import '../bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Button className='carousel'>
        <Carousel className='m-auto p-auto'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./placeholder-image.jpg")}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./placeholder-image.jpg")}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./placeholder-image.jpg")}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Button>
  );
}

export default UncontrolledExample;
