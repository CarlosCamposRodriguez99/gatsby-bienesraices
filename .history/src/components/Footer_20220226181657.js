import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListadoRedes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    flex: 1;
    margin-right: 5rem;
    justify-content: space-between;
    max-width: 30%;

    img {
      display: flex;
      flex-direction: row;
    }
    @media(min-width: 300px) {
      img {
        flex-direction: column;
        align-items: center;
        display: flex;
        padding-top: 3rem;
        padding-bottom: 
        margin: 0;

      }
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
        
        <Navegacion />
      </div>
    </footer>

  );
}

export default Footer;