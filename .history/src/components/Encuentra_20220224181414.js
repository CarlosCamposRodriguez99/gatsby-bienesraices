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
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
      }
    }
  `);

  console.log(imagen);


  return ( 
    <ImageBackground tag="section" fadeIn="soft" fluid={imagen.sharp.fluid}>
      <div>
        <h3>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div> 

    </ImageBackground>

  );
}

export default Encuentra;
