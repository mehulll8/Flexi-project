import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import '../bootstrap.min.css';
import ImgOverlay from '../Functions/Card';

function UncontrolledExample() {
    return (
        <Container className='col-auto'>
            <Button>
                <Carousel className='m-auto p-auto carousel'>
                    <Carousel.Item>
                        <ImgOverlay imgSrc="https://placehold.jp/1200x400.png" title="Image1" text="This is the first image"  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImgOverlay imgSrc="https://placehold.jp/1200x400.png" title="Image2" text="This is the Second image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImgOverlay imgSrc="https://placehold.jp/1200x400.png" title="Image3" text="This is the Third image" />
                    </Carousel.Item>
                </Carousel>
            </Button>
        </Container>
    );
}

export default UncontrolledExample;
