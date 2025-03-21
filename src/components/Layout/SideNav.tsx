import styled from "styled-components";
import logo from "../../assets/Aspis-logo-small.svg";
import home_icon_black from "../../assets/home-icon-black.svg";
import dog_icon from "../../assets/dog-icon.svg";
import staff_icon from "../../assets/staff-icon.svg";
import mypage_icon from "../../assets/mypage-icon.svg";
import envelope from "../../assets/envelope-img.svg";
import { theme } from "../../style/theme";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <NavSection>
      <StyledDiv>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo>
            <img src={logo} alt="" />
            <p>Aspis</p>
          </Logo>
        </Link>

        <ButtonSection>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NavButton>
              <img src={home_icon_black} alt="" />
              <p>HOME</p>
            </NavButton>
          </Link>

          <Link to={"/dog-manage"} style={{ textDecoration: "none" }}>
            <NavButton>
              <img src={dog_icon} alt="" />
              <p>애견 관리</p>
            </NavButton>
          </Link>

          <Link to={"/staff-manage"} style={{ textDecoration: "none" }}>
            <NavButton>
              <img src={staff_icon} alt="" />
              <p>스태프 관리</p>
            </NavButton>
          </Link>

          <Link to={"/staff-invite"} style={{ textDecoration: "none" }}>
            <NavButton>
              <img src={envelope} alt="" />
              <p>스태프 초대</p>
            </NavButton>
          </Link>
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

  @media (max-width: 925px) {
    gap: 60px;
  }
`;
const MypageButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  align-items: center;

  @media (max-width: 925px) {
    font-size: 18px;
    img {
      width: 24px;
      height: 24px;
    }
  }

  cursor: pointer;
`;
const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;

  @media (max-width: 925px) {
    gap: 28px;
  }
`;
const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: ${theme.color.black};
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 925px) {
    font-size: 18px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
const Logo = styled.div`
  color: ${theme.color.sub[4]};
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

  @media (max-width: 925px) {
    font-size: 30px;
    gap: 8px;

    img {
      width: 30px;
      height: 36px;
    }
  }
`;
const NavSection = styled.section`
  width: 290px;
  height: 100vh;
  padding: 48px 0 80px 60px;
  background-color: ${theme.color.white};
  z-index: 5;
  border-right: 2px solid ${theme.color.sub[2]};

  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: space-between;
  flex-shrink: 0;

  @media (max-width: 925px) {
    width: 200px;
    padding: 32px 0 40px 30px;
    gap: 50px;
  }
`;

export default SideNav;
