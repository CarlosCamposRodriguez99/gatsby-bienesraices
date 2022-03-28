import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const ListadoRedes = styled.ul`

`;



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


const Footer = () => {
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
          </ul>
      </div>

    </footer>

  );
}

export default Footer;