import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #75AB00;
`;

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {

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
      <select>
        <option value="">--Seleccione--</option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
        ))}
      </select>
    </Formulario>
  )

  return {
    FiltroUI
  }

}

export default useFiltro;