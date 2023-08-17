import * as S from "./style";
import logo from "assets/logo.svg";

const Header = () => {
  return (
    <S.Layout>
      <div style={{ width: "40%" }} />
      <S.LogoLayout>
        <S.Logo src={logo} />
        <S.LogoTitle>BusoMarcat</S.LogoTitle>
      </S.LogoLayout>
      <S.Login>로그인/회원가입</S.Login>
    </S.Layout>
  );
};

export default Header;
