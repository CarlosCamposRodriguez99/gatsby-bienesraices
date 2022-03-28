import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const {iconosRedes} = useStaticQuery(graphql`
  query {
    iconosRedes: allFile(filter: { relativeDirectory: {eq: "iconos" } } ) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
`);

const RedesIconos = iconos.edges;


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
              <img src={RedesIconos[2].node.publicURL} alt="icono whats" />
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