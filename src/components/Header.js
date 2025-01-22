import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#006BB6' }} variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="/" className="mx-auto text-center d-flex flex-column align-items-center">
          {/* Logo y título del portal */}
          <span className="text-white" style={{ fontSize: '32px', fontWeight: 'bold', letterSpacing: '2px' }}>
            NBA News
          </span>
          <span className="text-white" style={{ fontSize: '16px', fontStyle: 'italic' }}>
            Las últimas noticias, estadísticas y resultados de la NBA
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav>
            {/* Opciones de navegación */}
            <Nav.Link href="/" className="text-white mx-3" style={{ fontSize: '18px' }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/noticias" className="text-white mx-3" style={{ fontSize: '18px' }}>
              Noticias
            </Nav.Link>
            <Nav.Link href="/estadisticas" className="text-white mx-3" style={{ fontSize: '18px' }}>
              Estadísticas
            </Nav.Link>
            <Nav.Link href="/resultados" className="text-white mx-3" style={{ fontSize: '18px' }}>
              Resultados
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

