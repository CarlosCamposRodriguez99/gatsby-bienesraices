import React from 'react';

const PropiedadPreview = ({propiedad}) => {

  const { nombre } = propiedad;


  return ( 

    <h3>{nombre}</h3>

  );
}

export default PropiedadPreview;