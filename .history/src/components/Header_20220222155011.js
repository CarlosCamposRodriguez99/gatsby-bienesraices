import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './Navegacion';
import { css } from '@emotion/react';

const Header = () => {
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
        `}
      >
        <Link>
          Bienes Raices
        </Link>

        <Navegacion />

      </div>
    </header>
  );
}

export default Header;
