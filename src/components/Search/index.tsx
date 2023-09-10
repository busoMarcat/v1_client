import * as S from "./style";
import { Logo, Profile, SearchIcon, Sale, Chatting, Heart } from "assets/icons";

const Search = () => {
  const nav = [
    <>
      <Sale />
      <div>판매하기</div>
    </>,
    <>
      <Profile />
      <div>내 상점</div>
    </>,
    <>
      <Chatting />
      <div>내 채팅</div>
    </>,
    <>
      <Heart />
      <div>좋아요</div>
    </>,
  ];
  const links = ["/sale", "/profile", "/chatting", "/love"];

  return (
    <S.Layout>
      <S.LogoLink to="/">
        <Logo />
        <S.LogoTitle>BusoMarcat</S.LogoTitle>
      </S.LogoLink>
      <S.SearchBarContainer>
        <SearchIcon />
        <S.SearchBar placeholder="찾으시는 상품을 검색해주세요" />
      </S.SearchBarContainer>
      <S.Nav>
        {nav.map((item, index) => (
          <S.NavItem to={links[index]} key={index}>
            {item}
          </S.NavItem>
        ))}
      </S.Nav>
    </S.Layout>
  );
};

export default Search;
