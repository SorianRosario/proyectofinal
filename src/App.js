import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // El Sidebar original
import RightSidebar from './components/RightSidebar'; // Importamos el nuevo Sidebar
import MainContent from './components/MainContent';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header /> {/* Encabezado */}
      <Container fluid>
        <Row>
          <Col xs={3} className="bg-light p-0"> {/* Sidebar izquierdo ocupa 3 columnas */}
            <Sidebar />
          </Col>
          <Col xs={6} className="p-0"> {/* Contenido Principal ocupa 6 columnas */}
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/teams" element={<MainContent />} />
              <Route path="/players" element={<MainContent />} />
              <Route path="/scores" element={<MainContent />} />
            </Routes>
          </Col>
          <Col xs={3} className="p-0"> {/* Sidebar derecho ocupa 3 columnas */}
            <RightSidebar /> {/* Aquí agregamos el sidebar derecho */}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
