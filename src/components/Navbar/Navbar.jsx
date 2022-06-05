import {
  Navigation,
  NavResponsive,
  Nav,
  Title,
  OpenLinkButton,
  NavbarLink,
  NavbarLinkExtended,
  Button,
  ButtonResponsive,
} from "./NavbarStyle";

import { useState } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

export function Navbar() {
  const { user } = useAuthValue();
  const [click, setClick] = useState(false);
  const { logout } = useAuthentication();

  return (
    <Navigation>
      <Title>
        Mini <span>Blog</span>
      </Title>
      {click && (
        <NavResponsive>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          {!user && (
            <>
              <NavbarLinkExtended to="/login">Entrar</NavbarLinkExtended>
              <NavbarLinkExtended to="/register">Cadastrar</NavbarLinkExtended>
            </>
          )}
          {user && (
            <>
              <NavbarLinkExtended to="/posts/create">
                novo post
              </NavbarLinkExtended>
              <NavbarLinkExtended to="/dashboard">Dashboard</NavbarLinkExtended>
            </>
          )}
          <NavbarLinkExtended to="/about">Sobre</NavbarLinkExtended>
          {user && <ButtonResponsive onClick={logout}>Sair</ButtonResponsive>}
        </NavResponsive>
      )}
      <Nav>
        <NavbarLink to="/">Home</NavbarLink>
        {!user && (
          <>
            <NavbarLink to="/login">Entrar</NavbarLink>
            <NavbarLink to="/register">Cadastrar</NavbarLink>
          </>
        )}
        {user && (
          <>
            <NavbarLink to="/posts/create">novo post</NavbarLink>
            <NavbarLink to="/dashboard">Dashboard</NavbarLink>
          </>
        )}
        <NavbarLink to="/about">Sobre</NavbarLink>
        {user && <Button onClick={logout}>Sair</Button>}
        <OpenLinkButton onClick={() => setClick((curr) => !curr)}>
          {click ? <>&#10005;</> : <>&#8801;</>}
        </OpenLinkButton>
      </Nav>
    </Navigation>
  );
}
