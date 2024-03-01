import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


export const Navigation = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark" className="navbar"> 
        <Container className="justify-content-end">
          <Nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "isActive" : "isntActive"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pokemones"
              className={({ isActive }) =>
                isActive ? "isActive" : "isntActive"
              }
            >
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;