import React from 'react';
import { Link } from 'gatsby';


const Footer = () => {
  return ( 
    <footer>
      <div>
        <nav>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

        <ul>
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