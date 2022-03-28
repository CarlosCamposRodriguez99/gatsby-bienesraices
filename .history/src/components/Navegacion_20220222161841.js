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
    text-decoration: none;
    font-weight: 700;
    font-family: 'Roboto Slab', sans-serif;
    padding: 1rem;
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
    &.pagina-actual {
      border-bottom: 
    }
`;

const Header = () => {
  return ( 
    <Nav>
      <NavLink
        to={'/'}
        activeClassName='pagina-actual'
      >Inicio</NavLink>
      <NavLink
        to={'/nosotros'}
        activeClassName='pagina-actual'
      >Nosotros</NavLink>
      <NavLink
        to={'/propiedades'}
        activeClassName='pagina-actual'
      >Propiedades</NavLink>
      

    </Nav>

  );
}

export default Header;