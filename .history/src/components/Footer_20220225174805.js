import React from 'react';
import { Link } from 'gatsby';
import footerCSS from '../css/footer.module.css';

const Footer = () => {
  return ( 
    <footer className={footerCSS.footer}>
      <div className={footerCSS.contenido}>
        <nav className={footerCSS.navegacion}>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

        
      </div>

    </footer>

  );
}

export default Footer;