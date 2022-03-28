import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

/*Aqui nos quedamos perro*/
const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #75AB00;
  margin: 2rem auto 0 auto;
  max-width: 1200px;

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
      <Select>
        <option value="">--Buscar Categorí--</option>
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