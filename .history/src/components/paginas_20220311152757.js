import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from './Layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const Campos = styled.div`
  font-size: 2.6rem;
  margin-top: 4rem;
  border-radius: 2rem;
  background-color: #75AB00;
  padding: 3rem;
  color: #FFF;
  text-align: center;

  @media(min-width: 300px) {
    foi
  }
`;

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
  query($id:String!) {
    allStrapiPaginas(filter: {id: { eq: $id}}) {
      nodes {
        nombre
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

const Paginas = ({data: {allStrapiPaginas: { nodes }}}) => {

  const { nombre, imagen} = nodes[0]

  return (  
    <Layout>
        <main className="contenedor">
          <h1>{nombre}</h1>
          <ContenidoPagina>
            <GatsbyImage
              image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)}
              layout="fixed"
              alt="pagina"
              fadeIn="soft"
            />

            <Campos>
              <p>Vendedor: Carlos Campos</p>
              <p>Tel: 335215672</p>
              <p>Email: carlos@correo.com</p>
            </Campos>
            <Campos>
              <p>Vendedor: Luis Campos</p>
              <p>Tel: 33563626</p>
              <p>Email: luis@correo.com</p>
            </Campos>
          </ContenidoPagina>
        </main>

        {nombre === 'Propiedades' && (
          <ListadoPropiedades />
        )}      
    </Layout>
  );
}

export default Paginas;