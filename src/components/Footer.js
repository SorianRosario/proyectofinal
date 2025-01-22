// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importamos el archivo CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Acerca de nosotros</h3>
          <p>
            Somos una empresa dedicada a brindar soluciones tecnológicas
            innovadoras. ¡Transformamos ideas en realidad!
          </p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: mrr2k130@gmail.com</p>
          <p>Teléfono: +1 809 407 4051</p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100088278374441" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://x.com/MoiRosarioRubio" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/moises_r.r/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/mois%C3%A9s-rosario-449567300/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Empresa S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
