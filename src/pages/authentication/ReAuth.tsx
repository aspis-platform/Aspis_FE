import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import { theme } from "../../style/theme";
import styled from "styled-components";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const ReAuth = () => {
  const [password, setPassword] = useState("");
  const { user } = useUser();
  const navigate = useNavigate();

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    user.password = password;
    navigate("/mypage");
  };

  return (
    <StyledSection>
      <StyledContainer>
        <Title>
          <BigText>비밀번호를 다시 입력하세요</BigText>
          <p>민감한 정보에 접근하려 하고 있습니다</p>
        </Title>
        <FormSection>
          <InputComponent
            onHandleChange={(event) => onHandleChange(event)}
            type="password"
            label="비밀번호"
          />
          <Button onClick={onSubmit}>인증하기</Button>
        </FormSection>
      </StyledContainer>
    </StyledSection>
  );
};

const FormSection = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  @media (max-width: 925px) {
    width: 380px;
    gap: 48px;
  }
`;
const Button = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.color.sub[4]};
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: white;

  @media (max-width: 925px) {
    width: 380px;
    height: 56px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-size: 20px;
  font-weight: 400;
  color: #6d6d6d;

  @media (max-width: 925px) {
    gap: 10px;
    font-size: 20px;
  }
`;
const BigText = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${theme.color.black};
  @media (max-width: 925px) {
    font-size: 32px;
  }
`;
const StyledContainer = styled.div`
  width: 640px;
  height: 680px;
  background-color: ${theme.color.white};
  border-radius: 20px;
  padding: 100px 0;
  border: 2px solid ${theme.color.sub[2]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;

  @media (max-width: 925px) {
    width: 480px;
    height: 520px;
    padding: 60px 0;
    gap: 120px;
  }
`;
const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReAuth;
