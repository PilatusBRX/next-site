import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: #ebebeb;
  position: fixed;
  z-index: 999;
`;

export const Navbar = styled.ul`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const LinkItem = styled.li`
  list-style: none;
  margin: 10px;
  a {
    color: maroon;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
