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
      estacionamiento
    }
  }
}
`;

const Propiedades = () => {
  return (  
    <Layout>
      <h1>Propiedades</h1>

      
    </Layout>
  );
}

export default Propiedades;