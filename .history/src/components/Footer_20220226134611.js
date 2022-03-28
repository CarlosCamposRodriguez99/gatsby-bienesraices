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
            <li>
              <img />
              <img />
              <img />
              <img className={footerCSS.iconoLinke}/>
            </li>
          </ul>
      </div>

    </footer>

  );
}

export default Footer;