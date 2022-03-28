import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from './Layout';
import { graphql } from 'gatsby';
import * as ListadoPropiedades from './listadoPropiedades';

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

  @media(min-width: 820px) {
    font-family: 'Lato', sans-serif;
    display: flex;
    flex: 1;
    max-width: 820px;
    flex-direction: column;
    margin: 2rem auto 0 auto;
    font-size: 2.2rem;
    width: 100%;
    padding: 1rem auto 1rem 0;
  }

  @media(min-width: 200px) {
    font-family: 'Lato', sans-serif;
    max-width: 200px;
    margin: 2rem auto 0 auto;
    font-size: 2rem;
    width: 100%;
    padding: 1rem auto;
  }
  @media(min-width: 300px) {
    font-family: 'Lato', sans-serif;
    max-width: 300px;
    margin: 1rem 0 auto 0;
    font-size: 2rem;
    width: 100%;
    padding: 1rem 0 auto 0;
  }
  @media(min-width: 400px) {
    font-family: 'Lato', sans-serif;
    max-width: 400px;
    margin: 2rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
  @media(min-width: 1000px) {
    font-family: 'Lato', sans-serif;
    max-width: 1000px;
    margin: 2rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
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

const Propiedades = ({data}) => {

  const resultado = allStrapiPaginas.nodes;

  const { nombre, imagen} = resultado[0]

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

export default Propiedades;