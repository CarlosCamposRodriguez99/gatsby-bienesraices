import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListadoRedes = styled.ul`
  background-repeat: no-repeat;
  padding: 3rem 0 0 0;

`;

const Footer = () => {

  const { mediaIcons } = useStaticQuery(graphql`
    query {
      mediaIcons: allFile(filter: { relativeDirectory: {eq: "redes" } } ) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const redesIconos = mediaIcons.edges;

  return ( 
    <footer
      css={css`
         background-color: #0D283B;
         padding: 1.5rem;
      `}
    >
    
        <nav>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

        <ListadoRedes>
            <li>
              <img src={redesIconos[0].node.publicURL} alt="icono whats" />
            </li>
            <li>
              <img src={redesIconos[1].node.publicURL} alt="icono facebook"/>
            </li>
            <li>
              <img src={redesIconos[2].node.publicURL} alt="icono instagram" />
            </li>
            <li>
              <img src={redesIconos[3].node.publicURL} alt="icono linkedin" />
            </li>
          </ListadoRedes>
    </footer>

  );
}

export default Footer;