import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Iconos from './iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';

const ContenidoPagina = styled.div`
  margin: 0 auto;
  width: 95%;

  @media(min-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }


`;

export const query = graphql`
  
`;

const Propiedades = ({data: {allStrapiPropiedades: { nodes }}}) => {

  const { nombre, descripcion, wc, estacionamiento, habitaciones, agente, precio, imagen} = nodes[0]

  return (  
    <Layout>
        <main className="contenedor">
          <h1>{nombre}</h1>
          <ContenidoPagina>
            <GatsbyImage
              image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)}
              layout="fixed"
              alt="propiedad"
              fadeIn="soft"
            />
            <p>{descripcion}</p>
          </ContenidoPagina>
        </main>

      
    </Layout>
  );
}

export default Propiedades;