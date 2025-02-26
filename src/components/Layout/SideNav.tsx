import React from "react";
import styled from "styled-components";
import logo from "../../assets/Aspis-logo-small.svg";
import home_icon from "../../assets/home-icon.svg";
import home_icon_black from "../../assets/home-icon-black.svg";
import dog_icon from "../../assets/dog-icon.svg";
import staff_icon from "../../assets/staff-icon.svg";
import mypage_icon from "../../assets/mypage-icon.svg";
import { theme } from "../../style/theme";

const SideNav = () => {
  return (
    <NavSection>
      <StyledDiv>
        <Logo>
          <img src={logo} alt="" />
          <p>Aspis</p>
        </Logo>

        <ButtonSection>
          <NavButton>
            <img src={home_icon_black} alt="" />
            <p>HOME</p>
          </NavButton>

          <NavButton>
            <img src={dog_icon} alt="" />
            <p>애견 관리</p>
          </NavButton>

          <NavButton>
            <img src={staff_icon} alt="" />
            <p>스태프 관리</p>
          </NavButton>
        </ButtonSection>
      </StyledDiv>

      <MypageButton>
        <img src={mypage_icon} alt="" />
        <p>마이페이지</p>
      </MypageButton>
    </NavSection>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const MypageButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
`;
const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;
const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: ${theme.color.black};
  font-size: 24px;
  font-weight: 500;
`;
const Logo = styled.div`
  color: ${theme.color.main[4]};
  font-size: 36px;
  font-weight: 300;

  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  img {
    width: 36px;
    height: 40px;
  }
`;
const NavSection = styled.section`
  width: 290px;
  height: 100vh;
  padding: 48px 0 80px 60px;
  background-color: ${theme.color.white};
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: space-between;
`;

export default SideNav;
