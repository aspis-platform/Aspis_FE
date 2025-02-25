import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";
import aspis_logo from "../../assets/aspis-logo.svg";
import InputComponent from "../../components/Input/InputComponent";

const SignupPage = () => {
  return (
    <SignupSection>
      <SignupContainer>
        <Title>
          <img src={aspis_logo} />
          <p>회원가입</p>
        </Title>
        <InputSection>
          <EmailBox>
            <Label>이메일</Label>
            <p>emailemailemailemail</p>
          </EmailBox>
          <InputComponent label="아이디" />
          <InputComponent label="비밀번호" />
        </InputSection>
        <SubmitButton>회원가입</SubmitButton>
      </SignupContainer>
    </SignupSection>
  );
};

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.color.main[4]};

  img {
    width: 72px;
    height: 84px;
  }
`;
const SignupContainer = styled.div`
  width: 740px;
  height: 760px;
  background-color: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 40px 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
const SignupSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.sub[1]};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  color: #8d8d8d;
  font-size: 20px;
  font-weight: 400;
`;
const Label = styled.div`
  font-weight: 200;
  color: ${theme.color.black};
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

export default SignupPage;
