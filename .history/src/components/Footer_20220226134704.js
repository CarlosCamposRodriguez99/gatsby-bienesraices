import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } frpm 'gatsby';
import styled from '@emotion/styled';


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
              <img />
            </li>
          </ul>
      </div>

    </footer>

  );
}

export default Footer;