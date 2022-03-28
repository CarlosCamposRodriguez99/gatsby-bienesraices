import React from 'react';
import { Link } from 'gatsby';
import footerCSS from '../css/footer.module.css';

const Footer = () => {
  return ( 
    <footer className={footerCSS.footer}>
      <div className={footerCSS.contenido}>
        <nav>
          <Link>Inicio</Link>
          <Link to={/contacto}>Contacto</Link>
          <Link>Propiedades</Link>

        </nav>
      </div>

    </footer>

  );
}

export default Footer;