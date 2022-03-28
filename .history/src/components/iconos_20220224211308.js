import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Iconos = ({estacionamiento, wc, habitaciones}) => {

  const { iconos } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "iconos"} }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const imagenesIconos = iconos;


  return ( 
    <ul>
      <li> 
        <img src={imagenesIconos[9].node.publicURL} alt="icono wc" />
        <p>{wc}</p>
      </li>
      <li>
        <img src={imagenesIconos[10].node.publicURL} alt="icono estacionamiento" />
        <p>{estacionamiento}</p>
      </li>
      <li> 
        <img src={imagenesIconos[15].node.publicURL} alt="icono habitaciones" />
        <p>{habitaciones}</p>
      </li>
    </ul>

  );
}

export default Iconos;
