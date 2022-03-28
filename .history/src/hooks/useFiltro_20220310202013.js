import { React, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
        {categorias.map()}
      </select>
    </form>
  )

  return {
    FiltroUI
  }

}

export default useFiltro;