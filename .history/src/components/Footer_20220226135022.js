import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const {iconosRedes = useStaticQuery(graphql`


`);


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