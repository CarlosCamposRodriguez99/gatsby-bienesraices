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

const NavLink = styled(Link)`
    color: #FFF;
`;

const Header = () => {
  return ( 
    <Nav>
      <NavLink
        to={'/'}
      >Inicio</NavLink>
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