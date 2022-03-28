import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListadoRedes = styled.ul`
  display: flex;
  max-width: 20%;
  gap: 3rem;
  justify-content: space-between;
  margin: 3rem auto;

  li {
    flex-direction: row;


    
    img {
      display: flex;
      flex-direction: row;
      flex: 1;
    }
  }
`;

const Footer = () => {

  const { mediaIcons } = useStaticQuery(graphql`
    query {
      mediaIcons: allFile(filter: { relativeDirectory: {eq: "redes" } } ) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  
  const redesIconos = mediaIcons.edges;

  return ( 
    <footer
      css={css`
          background-color: #0D283B;
          padding: 5rem;
          margin-top: 5rem;
      `}
    >
      <div
        css={css`
            max-width: 120rem;
            margin: 0 auto;
            text-align: center;

            @media(min-width: 768px) {
              display: flex;
              align-itemns: center;
              justify-content: space-between;
            }
        `}
      >

        <Navegacion />
      </div>

      <ListadoRedes>
          <li>
            <img src={redesIconos[0].node.publicURL} alt="icono whats" />
          </li>
          <li>
            <img src={redesIconos[1].node.publicURL} alt="icono facebook"/>
          </li>
          <li>
            <img src={redesIconos[2].node.publicURL} alt="icono instagram" />
          </li>
          <li>
            <img src={redesIconos[3].node.publicURL} alt="icono linkedin" />
          </li>
        </ListadoRedes>
    </footer>

  );
}

export default Footer;