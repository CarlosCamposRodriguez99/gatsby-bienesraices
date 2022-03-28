import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListadoRedes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 20%;
  margin: 3rem auto;
  gap: 2rem;
  align-itemns: center;

  @media(min-width: 300px) {
    flex-direction: column;
    align-itemns: center;
    justify-content: center;
    max-width: 50%;
  }

  @media(min-width: 1200px) {
    flex-direction: row;
    flex: 1;
    max-width: 30%;
  }

  li {
    display: flex;
    flex: 1;
    flex-direction: row;
    max-width: 20%;

    img {
      max-width: 80%;
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