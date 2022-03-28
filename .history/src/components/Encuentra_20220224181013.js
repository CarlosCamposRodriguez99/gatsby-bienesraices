import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;

`;

const Encuentra  = () => {

  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: {eq: "encuentra.jpg"}) {
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

  console.log(imagen);


  return ( 
    <ImageBackground
      tag=
    ></ImageBackground>

  );
}

export default Encuentra;
