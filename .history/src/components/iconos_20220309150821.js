import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`;

const Iconos = ({estacionamiento, wc, habitaciones}) => {

  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos"} }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const imagenesIconos = iconos.edges;


  return ( 
    

  );
}

export default Iconos;
