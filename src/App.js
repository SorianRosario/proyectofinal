import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header /> {/* Encabezado */}
      <Container fluid>
        <Row>
          <Col xs={3} className="bg-light p-0"> {/* Sidebar ocupa 3 columnas */}
            <Sidebar />
          </Col>
          <Col xs={9}> {/* Contenido Principal ocupa el resto */}
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/teams" element={<MainContent />} />
              <Route path="/players" element={<MainContent />} />
              <Route path="/scores" element={<MainContent />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
