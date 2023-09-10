import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Layout = styled.div`
  color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.black};
  padding: 3% 0 2% 0;
`;

export const Container = styled.div`
  width: 76%;
  height: 60%;
`;

export const InfoBox = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${font.H2};
`;

export const HGroup = styled.hgroup`
  padding-bottom: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
`;

export const More = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 30%;
  border-width: 25%;
  padding-bottom: 3%;
  justify-content: center;
`;

export const Detail = styled(More)`
  border-bottom: 1px solid ${color.white};
`;

export const SubTitle = styled.span`
  ${font.H5};
  margin-bottom: 3%;
`;

export const PolicyText = styled.span`
  ${font.p4};
  color: ${color.white};
`;

export const Copyright = styled.span`
  margin-top: 3%;
  ${font.p4};
  color: ${color.white};
`;

export const Image = styled.section`
  display: flex;
  gap: 7px;
  height: 30%;
`;

export const AllSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3%;
`;
