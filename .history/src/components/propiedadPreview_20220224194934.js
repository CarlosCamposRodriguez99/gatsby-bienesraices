import React from 'react';

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, de } = propiedad;


  return ( 

    <h3>{nombre}</h3>

  );
}

export default PropiedadPreview;