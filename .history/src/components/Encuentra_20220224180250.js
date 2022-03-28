import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Encuentra  = () => {

  const { imagen } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "encuentra.jpg"}) {
        localFile {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
}
  
  
  `);


  return (  );
}

export default Encuentra;
