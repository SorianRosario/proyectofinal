import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, InputGroup, ListGroup, Spinner } from 'react-bootstrap';

// Constantes para la URL de la API y la API Key
const apiKey = '3c3b4b0f73cb4df2bef5d3dfbe307c10';
const url = `https://newsapi.org/v2/everything?q=NBA&language=es&apiKey=${apiKey}`;

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para obtener las noticias más populares al cargar la página
  useEffect(() => {
    fetchPopularNews();
  }, []);

  // Función para obtener noticias populares relacionadas con la NBA
  const fetchPopularNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const articles = response.data.articles.slice(0, 5); // Solo 5 sugerencias
      setSuggestions(articles);
    } catch (error) {
      console.error('Error al obtener noticias populares:', error);
    }
    setLoading(false);
  };

  // Función para manejar la búsqueda y actualizar la lista de sugerencias
  const handleSearch = async (term) => {
    if (!term) {
      fetchPopularNews(); // Si no hay término, mostrar noticias populares
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&language=es&apiKey=${apiKey}`
      );
      const articles = response.data.articles.slice(0, 5); // Solo 5 resultados
      setSuggestions(articles);
    } catch (error) {
      console.error('Error al buscar noticias:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-3 bg-light vh-100" style={{ width: '300px' }}>
      <h5 className="mb-3">Búsqueda de Noticias</h5>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar noticias..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </InputGroup>

      <h6>Sugerencias</h6>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <ListGroup>
          {suggestions.length > 0 ? (
            suggestions.map((article, index) => (
              <ListGroup.Item key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No hay sugerencias</ListGroup.Item>
          )}
        </ListGroup>
      )}
    </div>
  );
}

export default Sidebar;
