import Card from 'react-bootstrap/Card';

function ImgOverlay({ imgSrc, title, text, lastUpdated }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={imgSrc} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Last updated {lastUpdated}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;





