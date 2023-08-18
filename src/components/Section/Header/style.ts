import styled from "styled-components";
import color from "styles/color";

export const Layout = styled.header`
  display: flex;
  align-items: center;
  background: ${color.black};
  color: ${color.white};
  padding: 0.75% 0;
`;

export const BlankBox = styled.div`
  width: 40%;
`;

export const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

export const Logo = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;

export const LogoTitle = styled.div`
  margin: 2.5% 0 0 2.5%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const AccountLayout = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  gap: 5%;
  font-size: 0.9rem;
  font-weight: bold;
`;
