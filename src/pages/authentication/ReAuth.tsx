import InputComponent from "../../components/Input/InputComponent";
import { theme } from "../../style/theme";
import styled from "styled-components";

const ReAuth = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Title>
          <BigText>비밀번호를 다시 입력하세요</BigText>
          <p>민감한 정보에 접근하려 하고 있습니다</p>
        </Title>
        <FormSection>
          <InputComponent label="비밀번호" />
          <Button>로그인</Button>
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
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-size: 20px;
  font-weight: 400;
  color: #6d6d6d;
`;
const BigText = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${theme.color.black};
`;
const StyledContainer = styled.div`
  width: 640px;
  height: 680px;
  background-color: ${theme.color.white};
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
`;
const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.sub[1]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReAuth;
