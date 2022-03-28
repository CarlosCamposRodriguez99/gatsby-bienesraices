import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

  
`;

const Header = () => {
  return ( 
    <Nav>
      <Link
        to={'/'}
      >Inicio</Link>
      <Link
        to={'/nosotros'}
      >Nosotros</Link>
      <Link
        to={'/propiedades'}
      >Propiedades</Link>
      

    </Nav>

  );
}

export default Header;