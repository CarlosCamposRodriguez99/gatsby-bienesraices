import React from 'react';
import Iconos from './iconos';

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, imagen, habitaciones } = propiedad;


  return ( 

    <div>
      <div>
          <h3>{nombre}</h3>

          <p>$ {precio}</p>

          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
          />
      </div>
    </div>

  );
}

export default PropiedadPreview;