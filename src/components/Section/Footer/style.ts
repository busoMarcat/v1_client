import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const FooterLayout = styled.div`
    width: 100%;
    height: 400px;
    color: ${color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.black};
`;

export const FooterContainer = styled.div`
    width: 76%;
    height: 60%;
`;

export const FooterInfoBox = styled.footer`
    display: flex;
    flex-direction: column;

`;

export const FooterTitle = styled.span`
    ${font.H2};
`;

export const FooterHGroup = styled.hgroup`
    padding-bottom: 2%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
`;

export const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-bottom: 1px solid ${color.white};
    width: 30%;
    border-width: 25%;
    padding-bottom: 3%;
    justify-content: center;
`;

export const FooterSubTitle = styled.span`
    ${font.H5};
    margin-bottom: 3%;
`;

export const FooterPolicyText = styled.span`
    ${font.p4};
    color: ${color.white};
`;

export const FooterCopyright = styled.span`
    margin-top: 3%;
    ${font.p4};
    color: ${color.white};
`;

export const Icon = styled.img`
    width: 1.3rem;
    display: flex;

`;

export const Detaile = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    height: 30%;
    width: 21%
`

export const Image = styled.section`
    display: flex;
    gap: 7px;
    height: 30%;
`

export const AllSection = styled.section`
    display: flex;
    flex-direction: row; 
    gap: 3%;
`
