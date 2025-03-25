import { theme } from "../../style/theme";
import styled from "styled-components";
import aspis_logo from "../../assets/aspis-logo.svg";
import InputComponent from "../../components/Input/InputComponent";
import React, { useState } from "react";
import { AuthService } from "../../api/authService";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const key = queryParams.get("key") ?? "";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onHandleRegister = async () => {
    if (!userName || !password) {
      toast.error("이름과 비밀번호를 모두 작성하세요.");
    }

    await AuthService.register(userName, password, key);
  };

  return (
    <SignupSection>
      <SignupContainer>
        <Title>
          <img src={aspis_logo} />
          <p>회원가입</p>
        </Title>
        <InputSection>
          <InputComponent
            onHandleChange={(event) => {
              onNameChange(event);
            }}
            type="text"
            label="이름"
          />
          <InputComponent
            onHandleChange={(event) => {
              onPasswordChange(event);
            }}
            type="password"
            label="비밀번호"
          />
        </InputSection>
        <SubmitButton onClick={onHandleRegister}>회원가입</SubmitButton>
      </SignupContainer>
    </SignupSection>
  );
};

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;

  @media (max-width: 925px) {
    gap: 24px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.color.sub[4]};
  gap: 12px;

  img {
    width: 52px;
    height: 76px;
  }

  @media (max-width: 925px) {
    font-size: 24px;

    img {
      width: 60px;
      height: 72px;
    }
  }
`;
const SignupContainer = styled.div`
  width: 740px;
  height: 760px;
  background-color: ${theme.color.white};
  border-radius: 10px;
  padding: 40px 80px;
  border: 2px solid ${theme.color.sub[4]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media (max-width: 925px) {
    width: 440px;
    height: 480px;

    padding: 8px 6%;
    gap: 30px;
  }
`;
const SignupSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: white;

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

  @media (max-width: 925px) {
    font-size: 16px;
    gap: 10px;
  }
`;
const Label = styled.div`
  font-weight: 200;
  color: ${theme.color.black};
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 64px;
  border: none;
  background-color: ${theme.color.sub[4]};
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  @media (max-width: 925px) {
    height: 48px;
    font-size: 16px;
  }
`;

export default SignupPage;
