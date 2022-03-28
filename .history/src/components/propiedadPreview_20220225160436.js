import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #75ab00;
  width: 100%;
  color: #FFF;
  display: block;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  
`;

const Card = styled.div`
  border: 1px solid #75AB00;
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
    color: #75AB00;
  }

  p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
`;

const PropiedadPreview = ({propiedad}) => {

  const { nombre, wc, estacionamiento, descripcion, precio, imagen, habitaciones } = propiedad;


  return ( 
  <> 
      <Card>
        <GatsbyImage
          image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)}
          layout="fixed"
          alt="propiedades"
        />
        <Contenido>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>

          <p className="precio">$ {precio}</p>

          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />

          <Boton to={nombre}>
            Visitar Propiedad
          </Boton>
        </Contenido>
      </Card>
  </> 
);
}

export default PropiedadPreview;