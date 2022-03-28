import React from 'react';

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, imagen, habitaciones } = propiedad;


  return ( 

    <div>
      <div>
        <h3>{nombre}</h3>
      </div>
    </div>

  );
}

export default PropiedadPreview;