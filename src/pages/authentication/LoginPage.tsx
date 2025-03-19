import { theme } from "../../style/theme";
import styled from "styled-components";
import yeomiji_logo from "../../assets/yeomiji-logo.svg";
import InputComponent from "../../components/Input/InputComponent";
import React, { useState } from "react";
import { AuthService } from "../../api/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onHandleLogin = async () => {
    await AuthService.login(email, password, () => {
      navigate("/");
    });
  };

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
              <InputComponent
                onHandleChange={(event) => onEmailChange(event)}
                type={"email"}
                label={"이메일"}
              />
              <InputComponent
                onHandleChange={(event) => onPasswordChange(event)}
                type={"password"}
                label={"비밀번호"}
              />
            </InputSection>
            <SubmitButton onClick={onHandleLogin}>로그인</SubmitButton>
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

  @media (max-width: 925px) {
    width: 300px;
    height: 240px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;
const Title = styled.div`
  color: ${theme.color.sub[4]};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 925px) {
    font-size: 24px;
    gap: 8px;
  }
`;
const EngTitle = styled.div`
  font-weight: 300;
`;
const SubText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #858585;
  @media (max-width: 925px) {
    font-size: 14px;
  }
`;
const LoginCard = styled.div`
  width: 600px;
  height: 695px;
  background-color: ${theme.color.white};
  border-radius: 30px;
  padding: 100px 116px;
  border: 1px solid ${theme.color.sub[4]};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 925px) {
    width: 340px;
    height: 400px;

    padding: 50px 8%;
  }
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 76px;

  width: 100%;
  height: 100%;

  @media (max-width: 925px) {
    gap: 30px;
  }
`;
const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 100%;
  @media (max-width: 925px) {
    gap: 20px;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
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
const LoginTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 925px) {
    font-size: 28px;
  }
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

  @media (max-width: 925px) {
    width: 340px;
    height: 400px;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
