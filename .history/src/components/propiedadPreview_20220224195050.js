import React from 'react';

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, categoria, agente, imagen } = propiedad;


  return ( 

    <h3>{nombre}</h3>

  );
}

export default PropiedadPreview;