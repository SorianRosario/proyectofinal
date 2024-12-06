import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ title, image, content, url }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" href={url} target="_blank">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
