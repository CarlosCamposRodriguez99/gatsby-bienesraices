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
      <main>Propiedades</main>
      <h1>{nombre}</h1>
      <p>{contenido}</p>
    </Layout>
  )
}

export default Index;