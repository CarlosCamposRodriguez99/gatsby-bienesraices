import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Iconos from './Iconos';
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

  const { nombre, descripcion, wc, estacionamiento, habitaciones, agentes, precio, imagen} = nodes[0];

  /*Aqui nos quedamos perro images*/
  return (  
    <Layout>
      <h1>{nombre}</h1>
      <div>
        <main>
          <GatsbyImage
            image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)}
            layout="fixed"
            alt="propiedad"
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
            <h1>Vendedor:</h1>
            <p>{agente.nombre}</p>
          </div>
        </aside>
      </div>

      
    </Layout>
  );
}

export default Propiedades;