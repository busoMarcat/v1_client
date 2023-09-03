import * as S from "./style";
import insta from "assets/instagram.svg";
import facebook from "assets/facebook.svg";
import youtube from "assets/youtube.svg";

const Footer = () => {
  const { name, made, contact, address, copyRight, use, privacy, inquiry } = {
    name: "BusoMarcat",
    made: "상호: BusoMarcat | 대표 : 박현준",
    contact: "연락처 : 000-0000-0000 | 이메일 : busomarcat@000.com",
    address: `주소 : 부산광역시 강서구 가락대로 1393`,
    copyRight: "Copyrightⓒ부소마켓",
    use: "이용약관",
    privacy: "개인정보처리방침" ,
    inquiry: "문의하기",
  };


  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.FooterInfoBox>
          <S.FooterHGroup>
            <S.FooterTitle>{name}</S.FooterTitle>
          </S.FooterHGroup>
          <S.FlexBox>
          <S.FooterSection>
            {[made, contact, address].map((info) => (
              <S.FooterPolicyText>{info}</S.FooterPolicyText>
            ))}
          </S.FooterSection>
          <S.Detaile>
            {[use, privacy, inquiry].map((info) => (
              <S.FooterPolicyText>{info}</S.FooterPolicyText>
            ))}
          </S.Detaile>
          <S.Image>
            <S.Icon src ={insta}></S.Icon>
            <S.Icon src={facebook}></S.Icon>
            <S.Icon src={youtube}></S.Icon>
          </S.Image>
          </S.FlexBox>
          
          <S.FooterCopyright>{copyRight}</S.FooterCopyright>
        </S.FooterInfoBox>
      </S.FooterContainer>
    </S.FooterLayout>
  );
}

export default Footer;
