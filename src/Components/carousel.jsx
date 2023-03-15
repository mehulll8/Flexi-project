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
                <Image fluid src="https://placehold.jp/1200x400.png"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>First image</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid src="https://placehold.jp/1200x400.png"/>

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Second Image</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid src="https://placehold.jp/1200x400.png"/>

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    This is the third image
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Button>
    </Container>
  );
}

export default UncontrolledExample;
