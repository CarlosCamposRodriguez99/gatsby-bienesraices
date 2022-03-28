import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navegacion from './Navegacion';

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
          padding: 5rem;
          margin-top: 5rem;
      `}
    >



      <div
        css={css`
            max-width: 120rem;
            margin: 0 auto;
            text-align: center;

            @media(min-width: 768px) {
              display: flex;
              align-itemns: center;
              justify-content: space-between;
            }
        `}
      >
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>

          <Navegacion />

          
      </div>
    </footer>

  );
}

export default Footer;