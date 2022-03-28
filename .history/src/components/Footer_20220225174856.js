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

        <ul className={footerCSS.ul}>
            <li className={footerCSS.list}>
              <i className={footerCSS.iconoInsta}></i>
              <i className={styles.iconoFace}></i>
              <i className={styles.iconoWhats}></i>
              <i className={styles.iconoLinke}></i>
            </li>
          </ul>
      </div>

    </footer>

  );
}

export default Footer;