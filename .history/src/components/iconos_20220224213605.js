import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Iconos = ({estacionamiento, wc, habitaciones}) => {

  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos"} }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const imagenesIconos = iconos.edges;


  return ( 
    <ListadoIconos>
      <li> 
        <img src={imagenesIconos[2].node.publicURL} alt="icono wc" />
        <p>{wc}</p>
      </li>
      <li>
        <img src={imagenesIconos[1].node.publicURL} alt="icono estacionamiento"/>
        <p>{estacionamiento}</p>
      </li>
      <li> 
        <img src={imagenesIconos[0].node.publicURL} alt="icono habitaciones" />
        <p>{habitaciones}</p>
      </li>
    </ListadoIconos>

  );
}

export default Iconos;
