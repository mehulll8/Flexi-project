import useScrollSnap from 'react-use-scroll-snap';
import Container from './Container.jsx'; 
import Homepage from '../Views/Homepage.jsx';

function Component() {
    const containerRef = useRef(null);
    useScrollSnap({ ref: containerRef, duration: 100, delay: 50 });

    return (
        <Container ref={containerRef}>
            <Homepage></Homepage>
        </Container>
    );
}