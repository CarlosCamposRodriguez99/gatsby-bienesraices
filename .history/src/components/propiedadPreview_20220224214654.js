import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';

const Card = styled.div`
  border: 1px solid #FFA07A;
  img {
    max-width: 100%;
  }
`;

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, imagen, habitaciones } = propiedad;


  return ( 

    <Card>
      <div>
          <h3>{nombre}</h3>

          <p>$ {precio}</p>

          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
      </div>
    </Card>

  );
}

export default PropiedadPreview;