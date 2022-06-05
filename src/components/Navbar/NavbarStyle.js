import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.header`
  display: flex;
  padding: 20px;
  height: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.2em;
  z-index: 1;
  transition: all 0.4s;
  cursor: pointer;

  :hover {
    color: #bbb;
  }
  span {
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavbarLink = styled(Link)`
  @media (max-width: 949px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-size: 1.5rem;
`;

export const Button = styled.button`
  @media (max-width: 949px) {
    display: none;
  }
`;
export const ButtonResponsive = styled.button`
  font-size: 1.5rem;
`;

export const OpenLinkButton = styled.button`
  font-size: 30px;
  z-index: 1;
  opacity: 0;

  @media (max-width: 949px) {
    opacity: 1;
  }
`;

export const NavResponsive = styled.nav`
  display: flex;
  gap: 80px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translateY(330px) translateX(-20px);
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #f6fcff;

  @media (min-width: 949px) {
    display: none;
  }
`;
