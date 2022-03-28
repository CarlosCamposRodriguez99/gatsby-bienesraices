import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';
import * as heroCSS from '../css/hero.module.css';
import Encuentra from '../components/Encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';
import Navegacion from '../components/Navegacion';


const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];

  return (
    <Layout>
      <ImageBackground
        tag="section"
        fadeIn="soft"
        fluid={imagen.sharp.fluid}
      >
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>Venta de casas y departamentos exclusivos</h1>
        </div>
      </ImageBackground>
      <main>
        <div
            css={css`
                max-width: 800px;
                margin: 0 auto;
            `}
        >
          <h1>{nombre}</h1>
          <p 
            css={css`
              text-align: center;
            `}
          >{contenido}</p>

        </div>
      </main>

      <Encuentra />
      
      <ListadoPropiedades />

      <Nave


    </Layout>
  );
}

export default Index;