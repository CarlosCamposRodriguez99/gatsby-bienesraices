import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Iconos from './iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedades(filter: {id: { eq: $id }}) {
      nodes {
        nombre
        descripcion
        wc
        habitaciones
        precio
        estacionamiento
        agentes {
          nombre
          email
          telefono
        }
        imagen {
          localFile {
            sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
    }
  }
`;

const Propiedades = ({data}) => {


  return (  
    <Layout>
      <h1>Propiedades</h1>

      
    </Layout>
  );
}

export default Propiedades;