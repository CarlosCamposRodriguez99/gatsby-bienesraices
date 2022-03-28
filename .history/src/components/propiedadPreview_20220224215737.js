import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';

const Card = styled.div`
  border: 1px solid #228b22;
  img {
    max-width: 100%;
  }
`;

const Contenido = styled.div`
  padding: 2rem;

  h3 {
    font-family: 'Lato', sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;

  }

  .precio {
    font-size: 2rem;


  }

`;

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, imagen, habitaciones } = propiedad;


  return ( 

    <Card>
      <Contenido>
          <h3>{nombre}</h3>

          <p className="precio">$ {precio}</p>

          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
      </Contenido>
    </Card>

  );
}

export default PropiedadPreview;