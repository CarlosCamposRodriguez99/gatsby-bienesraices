import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

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
  
  const RedesIconos = iconosRedes.edges;




  return ( 
    <footer>
      <div>
        <nav>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contacto'}>Contacto</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

        <ListadoRedes>
            <li>
              <img src={RedesIconos[3].node.publicURL} alt="icono whats" />
              <img src={RedesIconos[4].node.publicURL} alt="icono facebook"/>
              <img src={RedesIconos[5].node.publicURL} alt="icono instagram" />
              <img src={RedesIconos[6].node.publicURL} alt="icono linkedin" />
            </li>
          </ListadoRedes>
      </div>

    </footer>

  );
}

export default Footer;