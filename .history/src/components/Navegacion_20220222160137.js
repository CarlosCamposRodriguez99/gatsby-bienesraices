import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media(min-width: 768px) {
      padding: 0;
      flex-direction: row;
    }
`;

const NavLink = styled(Link)

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