import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/react';
import { css } from '@emotion/styled';

const Index = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];


  return (
    <Layout>
      <main>
        <div
            css={css`
                max-width: 800px;
                margin: 0 auto;
            `}
        >

        </div>
      </main>
      
    </Layout>
  )
}

export default Index;