import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/react';
import { css } from 

const Index = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];


  return (
    <Layout>
      <h1>{nombre}</h1>
      <p>{contenido}</p>
    </Layout>
  )
}

export default Index;