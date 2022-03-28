import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #75AB00;
  margin: 2rem auto 0 auto;
  max-width: 1200px;

  @media(min-width: 200px) {
    width: 100%;
    border: 1px solid #75AB00;
    display: flex;
    margin: 1rem auto 0 auto;
    max-width: 200px;
  }

  @media(min-width: 300px) {
    width: 100%;
    border: 1px solid #75AB00;
    display: flex;
    margin: 1rem auto 0 auto;
    max-width: 300px;
  }

`;

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: 'Lato', sans-serif;

  @media(min-width: 200px) {
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
  }

  @media(min-width: 300px) {
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
  }

`;

const useFiltro = () => {

  const [ categoria, guardarCategoria ] = useState('');

  const resultado = useStaticQuery(graphql`
      query {
        allStrapiCategorias {
            nodes {
              nombre
              id
            }
        }
      }
  `);
  
  const categorias = resultado.allStrapiCategorias.nodes;

  const FiltroUI = () => (
    <Formulario>
      <Select
        onChange?
      >
        <option value="">--Buscar Categoría--</option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
        ))}
      </Select>
    </Formulario>
  )

  return {
    FiltroUI
  }

}

export default useFiltro;