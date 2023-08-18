import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import logo from "assets/logo.svg";

interface HeaderProps {
  showAccount?: boolean;
}

const Header = ({ showAccount }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.BlankBox />
      <S.LogoLayout onClick={() => navigate("/")}>
        <S.Logo src={logo} />
        <S.LogoTitle>BusoMarcat</S.LogoTitle>
      </S.LogoLayout>
      {showAccount && (
        <S.AccountLayout>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </S.AccountLayout>
      )}
    </S.Layout>
  );
};

export default Header;
