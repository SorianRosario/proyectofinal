import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#006BB6' }} variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        {/* Logo de la NBA */}
        <span className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}>NBA News</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
