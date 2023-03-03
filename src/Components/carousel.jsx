import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import '../bootstrap.min.css';
import Image from 'react-bootstrap/Image'

function UncontrolledExample() {
  return (
    <Container className='col-auto'>
        <Button>
            <Carousel className='m-auto p-auto carousel'>
            <Carousel.Item>
                <Image fluid src="https://placehold.jp/800x400.png"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid src="https://placehold.jp/800x400.png"/>

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid src="https://placehold.jp/800x400.png"/>

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Button>
    </Container>
  );
}

export default UncontrolledExample;
