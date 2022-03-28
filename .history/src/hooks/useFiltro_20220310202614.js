import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
  width: 100%;
  display: flex;
  margin-top: 2rem;
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
    <form>
      <select>
        <option value="">--Seleccione--</option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
        ))}
      </select>
    </form>
  )

  return {
    FiltroUI
  }

}

export default useFiltro;