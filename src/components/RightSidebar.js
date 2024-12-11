import React, { useState, useEffect } from 'react';

// API Key y URL proporcionados
const apiKey = '3c3b4b0f73cb4df2bef5d3dfbe307c10';
const url = `https://newsapi.org/v2/everything?q=NBA&language=es&apiKey=${apiKey}`;

const RightSidebar = () => {
  const [news, setNews] = useState([]); // Estado para almacenar las noticias

  // Hook para obtener las noticias cuando el componente se monta
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles); // Guardamos las noticias en el estado
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []); // El arreglo vacío asegura que solo se ejecuta una vez cuando se monta el componente

  return (
    <div style={sidebarStyles}>
      <h3>Noticias Más Buscadas</h3>
      <ul style={listStyles}>
        {news.slice(0, 5).map((article, index) => (
          <li key={index} style={listItemStyles}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Estilos para el Sidebar
const sidebarStyles = {
  top: '20px',
  right: '0',
  width: '300px',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const listStyles = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const listItemStyles = {
  marginBottom: '10px',
  fontSize: '16px',
};

export default RightSidebar;
