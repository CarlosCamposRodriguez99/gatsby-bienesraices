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
  
  const imagenesIconos = iconos.edges;


  return ( 
    <ul>
      <li> 
        <img src={imagenesIconos[2].node.publicURL} alt="icono wc" />

        <p>{wc}</p>
      </li>
    </ul>

  );
}

export default Iconos;
