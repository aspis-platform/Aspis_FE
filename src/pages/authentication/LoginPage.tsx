import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";
import yeomiji_logo from "../../assets/yeomiji-logo.svg";
import InputComponent from "../../components/Input/InputComponent";

const LoginPage = () => {
  return (
    <LoginSection>
      <LoginContainer>
        <AspisIntro>
          <AspisCard>
            <div>
              <Title>
                <p>아스피스</p>
                <EngTitle>Aspis</EngTitle>
              </Title>
              <SubText>여수 여미지 동물보호협회 관리시스템</SubText>
            </div>
            <img src={yeomiji_logo} alt="" />
          </AspisCard>
        </AspisIntro>
        <LoginCard>
          <StyledSection>
            <LoginTitle>로그인</LoginTitle>
            <InputSection>
              <InputComponent label={"아이디"} />
              <InputComponent label={"비밀번호"} />
            </InputSection>
            <SubmitButton>로그인</SubmitButton>
          </StyledSection>
        </LoginCard>
      </LoginContainer>
    </LoginSection>
  );
};

const AspisCard = styled.div`
  width: 400px;
  height: 340px;
  background-color: ${theme.color.white};
  padding: 36px;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%, 0% 50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 88px;
    height: 88px;
  }
`;
const Title = styled.div`
  color: ${theme.color.main[4]};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const EngTitle = styled.div`
  font-weight: 300;
`;
const SubText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #858585;
`;
const LoginCard = styled.div`
  width: 600px;
  height: 695px;
  background-color: ${theme.color.white};
  border-radius: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 100px 116px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 76px;

  width: 100%;
  height: 100%;
`;
const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 100%;
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  background-color: ${theme.color.sub[4]};
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
`;
const LoginTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const AspisIntro = styled.div`
  width: 600px;
  height: 695px;
  background-color: ${theme.color.sub[4]};
  border-radius: 30px;
  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.sub[1]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
