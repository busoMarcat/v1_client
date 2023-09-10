import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "styles/color";

export const Layout = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  padding: 0.75% 20%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 1.5rem;
`;

export const LogoTitle = styled.div`
  margin: 2.5% 0 0 2.5%;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${color.black};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  gap: 1.5%;
  background-color: ${color.lightgray};
  border-radius: 20px;
  width: 70%;
  padding: 1.5%;
  margin-left: 2.5%;
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
`;

export const SearchBar = styled.input`
  width: 92.5%;
  font-size: 1.2rem;
  border: none;
  background-color: ${color.lightgray};
  &:focus {
    outline: none;
  }
`;

export const Nav = styled.div`
  margin-left: 2.5%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const NavItem = styled(Link)`
  width: 40%;
  display: flex;
  gap: 10%;
  color: black;
  margin: 2.5% 0 2.5% 0;
`;
