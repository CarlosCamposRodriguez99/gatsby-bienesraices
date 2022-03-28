import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListadoRedes = styled.ul`
  background-repeat: no-repeat;
  padding: 3rem 0 0 0;
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`;

const Footer = () => {

  const { iconosRedesSocial } = useStaticQuery(graphql`
    query {
      iconosRedes: allFile(filter: { relativeDirectory: {eq: "iconosRedes" } } ) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const redesIconos = iconosRedes.edges;

  return ( 
    <footer>
    
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