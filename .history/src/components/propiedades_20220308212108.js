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
        agente {
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
    }
  }
`;

const Propiedades = ({data: {allStrapiPropiedades: { nodes }}}) => {

  const { nombre, descripcion, wc, estacionamiento, habitaciones, agentes, precio, imagen} = nodes[0];


  return (  
    <Layout>
      <h1>{nombre}</h1>
      <div>
        <main>
          <GatsbyImage
            image={getImage(imagen.fluid.sharp)}
            layout="responsive"
            alt="propiedad"
          />

        </main>
        <aside>

        </aside>
      </div>

      
    </Layout>
  );
}

export default Propiedades;