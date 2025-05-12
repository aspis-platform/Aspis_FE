import { theme } from "../../style/theme";
import styled from "styled-components";
import StatusCard from "../../components/StatusCard";
import dog_img_big from "../../assets/dog-image-big.svg";
import staff_img from "../../assets/staff-img.svg";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const HomePage = () => {
  const { user } = useUser();
  const ismanager: boolean = user.authority === "MANAGER";
  const userName = localStorage.getItem("user_name");

  return (
    <HomeSection>
      <HomeContainer>
        <Title>반갑습니다, {userName}님</Title>
        <CardContainer>
          <StatusCard name="보호중인 애견 수" number={12} unit="마리" />
          <StatusCard name="임시 보호율" number={4} unit="%" />
          <StatusCard name="이번주 방문자 수" number={43} unit="명" />
          <StatusCard name="이번주 후원금 사용기록" number={10000} unit="원" />
        </CardContainer>
        <ButtonContainer $ismanager={ismanager}>
          <Link to={"/dog-manage"} style={{ textDecoration: "none" }}>
            <ButtonBox>
              <p>애견 관리 페이지 바로가기</p>
              <img src={dog_img_big} />
            </ButtonBox>
          </Link>

          {ismanager && (
            <>
              <Link to={"/staff-manage"} style={{ textDecoration: "none" }}>
                <ButtonBox>
                  <p>스태프 관리 페이지 바로가기</p>
                  <img src={staff_img} />
                </ButtonBox>
              </Link>
            </>
          )}
        </ButtonContainer>
      </HomeContainer>
    </HomeSection>
  );
};

const ButtonBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  border: 2px solid ${theme.color.sub[2]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1670px) {
    width: 360px;
    height: 400px;
    padding: 20px 20px;
    gap: 20px;

    img {
      width: 40%;
    }
  }

  @media (max-width: 925px) {
    width: 250px;
    height: 360px;
    padding: 20px 20px;
    gap: 20px;

    img {
      width: 60%;
    }
  }
`;
const ButtonContainer = styled.div<{ $ismanager: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ $ismanager }) =>
    $ismanager ? "space-between" : "center"};
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${theme.color.black};

  @media (max-width: 925px) {
    font-size: 22px;
  }
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;

  @media (max-width: 925px) {
    gap: 50px;
  }
`;
const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 84px 265px;

  display: flex;
  justify-content: center;

  @media (max-width: 1670px) {
    padding: 120px 200px;
  }
`;

export default HomePage;
