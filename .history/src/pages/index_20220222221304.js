import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    height: 600;
`;

const Index = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];

  return (
    <Layout>
      <ImageBackground
        Tag="section"
        fluid={imagen.fluid}
        fadeIn="soft"
      >
        <div>
          <h1>Venta de casas y departamentos exclusivos</h1>
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
      
    </Layout>
  );
}

export default Index;