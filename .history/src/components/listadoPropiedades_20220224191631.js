import React from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/'

const ListadoPropiedades = () => {
  return (
    <h2 css={css`
        margin-top: 5rem;
    `}>Nuestras Propiedades</h2>

  );
}

export default ListadoPropiedades;