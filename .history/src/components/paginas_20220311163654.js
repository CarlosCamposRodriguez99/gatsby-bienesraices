import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from './Layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const Campos = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 3fr;
  font-size: 2.6rem;
  margin: 2rem 0 auto 0;
  border-radius: 2rem;
  background-color: #75AB00;
  padding: 2rem;
  color: #FFF;
  text-align: center;
  font-family: 'Lato', sans-serif;

  p {
    font-family: 'Lato', sans-serif;
  }

  @media(min-width: 300px) {
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    padding: 1rem;
  }
  @media(min-width: 800px) {
    font-family: 'Lato', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 2rem 0 0 0;
    font-size: 2rem;
    padding: 2rem auto 2rem 0;
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
              <p>Tel: 33521567</p>
              <p>Email: carlos@correo.com</p>
            </Campos>
            <Campos>
              <p>Vendedor: Luis Campos</p>
              <p>Tel: 33563626</p>
              <p>Email: luis@correo.com</p>
            </Campos>
            <Campos>
              <p>Vendedor: Mariana Campos</p>
              <p>Tel: 33445566</p>
              <p>Email: mariana@correo.com</p>
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