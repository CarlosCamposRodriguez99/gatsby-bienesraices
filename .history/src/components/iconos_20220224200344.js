import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Iconos = () => {

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
    <ul></ul>

  );
}

export default Iconos;
