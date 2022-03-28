import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navegacion from './Navegacion';
import { css } from '@emotion/react';

const Header = () => {

  //consultar logo.svg
  const { logo } = useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo.svg"}) {
          publicURL

        }
    }
  
  `);


  return (
    <header
        css={css` 
            background-color: #0D283B;
            padding: 1.5rem;
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
        <Link>
          <img src={logo.publicURL} alt="lo" />
        </Link>

        <Navegacion />

      </div>
    </header>
  );
}

export default Header;
