import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Encuentra  = () => {

  const { imagen } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "encuentra.jpg"}) {
        localFile {
          sharp: childImageSharp {
            fluid(maxW)
          }
        }

  }
}
  
  
  `);


  return (  );
}

export default Encuentra;
