import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";
import StatusCard from "../../components/StatusCard";
import dog_img_big from "../../assets/dog-image-big.svg";
import staff_img from "../../assets/staff-img.svg";

const HomePage = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <Title>반갑습니다, 홍길동님</Title>
        <CardContainer>
          <StatusCard name="보호중인 애견 수" number={4} unit="마리" />
          <StatusCard name="보호중인 애견 수" number={4} unit="마리" />
          <StatusCard name="보호중인 애견 수" number={4} unit="마리" />
          <StatusCard name="보호중인 애견 수" number={4} unit="마리" />
        </CardContainer>
        <ButtonContainer>
          <ButtonBox>
            <p>애견 관리 페이지 바로가기</p>
            <img src={dog_img_big} />
          </ButtonBox>
          <ButtonBox>
            <p>스태프 관리 페이지 바로가기</p>
            <img src={staff_img} />
          </ButtonBox>
        </ButtonContainer>
      </HomeContainer>
    </HomeSection>
  );
};

const ButtonBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
`;
const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.color.sub[1]};
  padding: 84px 265px;

  display: flex;
  justify-content: center;
`;

export default HomePage;
