import React, { useState } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';

const ListadoPropiedades = () => {

  const resultado = usePropiedades();
  
  const [propiedades, guardarPropiedades] = useState('');s



  return (
    <h2 css={css`
        margin-top: 5rem;
    `}>Nuestras Propiedades</h2>

  );
}

export default ListadoPropiedades;