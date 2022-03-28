import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';

const Index = () => {

  const inicio = useInicio();
  console.log(inicio);


  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index;