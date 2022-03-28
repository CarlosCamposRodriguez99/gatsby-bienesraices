import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Encuentra  = () => {

  const { imagen } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "encuentra.jpg"}) {
        imagen {

        }
        
      }
    }
  `);

  console.log(imagen);


  return ( 
    <p>Imagen</p>

  );
}

export default Encuentra;
