import * as S from "./style";
import { Instagram, Facebook, Youtube } from "assets/icons";

const Footer = () => {
  const { name, made, contact, address, copyRight, use, privacy, inquiry } = {
    name: "BusoMarcat",
    made: "상호: BusoMarcat | 대표 : 박현준",
    contact: "연락처 : 000-0000-0000 | 이메일 : busomarcat@000.com",
    address: `주소 : 부산광역시 강서구 가락대로 1393`,
    copyRight: "Copyrightⓒ부소마켓",
    use: "이용약관",
    privacy: "개인정보처리방침",
    inquiry: "문의하기",
  };

  const Icons = [<Instagram />, <Facebook />, <Youtube />];

  return (
    <S.Layout>
      <S.Container>
        <S.InfoBox>
          <S.HGroup>
            <S.Title>{name}</S.Title>
          </S.HGroup>
          <S.AllSection>
            <S.Detail>
              {[made, contact, address].map((info, index) => (
                <S.PolicyText key={index}>{info}</S.PolicyText>
              ))}
            </S.Detail>
            <S.More>
              {[use, privacy, inquiry].map((info, index) => (
                <S.PolicyText key={index}>{info}</S.PolicyText>
              ))}
            </S.More>
            <S.Image>
              {Icons.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </S.Image>
          </S.AllSection>
          <S.Copyright>{copyRight}</S.Copyright>
        </S.InfoBox>
      </S.Container>
    </S.Layout>
  );
};

export default Footer;
