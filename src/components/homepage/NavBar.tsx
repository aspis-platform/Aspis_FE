import React from "react";
import { styled } from "styled-components";
import logo_image from "../../assets/yeomiji-logo.svg";

const NavBar = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <Logo>
          <img src={logo_image} />
        </Logo>
        <NavItem>
          <a>홈</a>
          <a>단체소개</a>
          <a>입양</a>
          <a>소식</a>
          <a>봉사활동</a>
          <a>후원 안내</a>
        </NavItem>
      </StyledDiv>
    </StyledNav>
  );
};

const Logo = styled.div`
  display: flex;
  width: 264px;
  height: 69px;
  flex-direction: row;
`;
const NavItem = styled.div`
  display: flex;
  gap: 156px;
  width: 1140px;
  font-size: 24px;
  font-weight: 500;
  margin: 24px 0 16px 0;
`;
const StyledNav = styled.nav`
  width: 100vw;
  height: 144px;
  padding: 45px 0 30px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
`;
const StyledDiv = styled.div`
  gap: 196px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  width: 1600px;
`;

export default NavBar;
