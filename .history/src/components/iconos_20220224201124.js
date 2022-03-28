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
  console.log(iconos);


  return ( 
    <ul>
      <li> 
        <img src={/} />

        <p>{wc}</p>
      </li>
    </ul>

  );
}

export default Iconos;
