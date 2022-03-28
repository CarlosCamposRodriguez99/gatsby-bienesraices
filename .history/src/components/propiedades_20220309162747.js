import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Iconos from './iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

const Siderbar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75A

  }

  .agente {

  }
`;

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
        agente {
          nombre
          email
          telefono
        }
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
      }  
    }
  }
`;

const Propiedades = ({data: {allStrapiPropiedades: { nodes }}}) => {

  const { nombre, descripcion, wc, estacionamiento, habitaciones, agente, precio, imagen} = nodes[0]

  return (  
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <GatsbyImage
            image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)}
            layout="fixed"
            alt="propiedad"
            fadeIn="soft"
          />
          <p>{descripcion}</p>
        </main>
        <aside>
          <p>${precio}</p>
          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div>
            <p>Vendedor: {agente.nombre}</p>
            <p>Tel: {agente.telefono}</p>
            <p>Email: {agente.email}</p>
          </div>
        </aside>
      </Contenido>

      
    </Layout>
  );
}

export default Propiedades;