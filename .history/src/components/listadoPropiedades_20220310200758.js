import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import * as listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

  const resultado = usePropiedades();
  
  const [propiedades, guardarPropiedades] = useState([]);

  // filtrado de las propiedades
  const { FiltroUI } = useFiltro();

  useEffect(() => {
    guardarPropiedades(resultado);
  }, [])



  return (
  <>
      <h2 css={css`
          margin-top: 5rem;
      `}>Nuestras Propiedades</h2>
      {}
      
  
      <ul className={listadoPropiedadesCSS.propiedades}>
          {propiedades.map( propiedad => (
            <PropiedadPreview
              key={propiedad.id}
              propiedad={propiedad}
            />
          ))}
      </ul>
  </>
  );
}

export default ListadoPropiedades;