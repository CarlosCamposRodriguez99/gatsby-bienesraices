import React from 'react';
import { Link } from 'gatsby';
import * as footerCSS from '../css/footer.module.css';

const Footer = () => {
  return ( 
    <footer className={footerCSS.footer}>
      <div className={footerCSS.contenido}>
        <nav className={footerCSS.navegacion}>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

        <ul className={footerCSS.ul}>
            <li className={footerCSS.list}>
              <img className={footerCSS.iconoInsta}/>
              <img className={footerCSS.iconoFace}/>
              <img className={footerCSS.iconoWhats}/>
              <img className={footerCSS.iconoLinke}/>
            </li>
          </ul>
      </div>

    </footer>

  );
}

export default Footer;