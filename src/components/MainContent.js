import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';

const MainContent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '3c3b4b0f73cb4df2bef5d3dfbe307c10';
    const url = `https://newsapi.org/v2/everything?q=NBA&language=es&apiKey=${apiKey}`;

    // Realizamos la solicitud a la API
    axios.get(url)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error("Hubo un error al obtener las noticias: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Noticias de la NBA</h2>
      <Row xs={1} md={1} lg={1} className="g-4"> {/* Usamos Row para el layout con padding entre las cartas */}
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Col key={index}>
              <Card className="h-100"> {/* Hacemos que la carta ocupe toda la altura disponible */}
                <Card.Img variant="top" src={article.urlToImage} /> {/* Imagen de la noticia */}
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button variant="primary" href={article.url} target="_blank">Leer más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </Row>
    </div>
  );
}

export default MainContent;
