import MypageInput from "../../components/Input/MypageInput";
import { theme } from "../../style/theme";
import styled from "styled-components";

const Mypage = () => {
  return (
    <StyledSection>
      <FormSection>
        <FormContainer>
          <BigText>기본 정보</BigText>
          <Email>
            <SmallText>이메일</SmallText>
            <p>redroadman@mail.com</p>
          </Email>

          <NameSection>
            <MypageInput label="성" type="text" />
            <MypageInput label="이름" type="text" />
          </NameSection>

          <BlueButton>수정하기</BlueButton>
        </FormContainer>

        <FormContainer>
          <BigText>비밀번호 변경</BigText>
          <MypageInput label="새로운 비밀번호" type="password" />
          <MypageInput label="비밀번호 확인" type="password" />
          <BlueButton>변경하기</BlueButton>
        </FormContainer>

        <FormContainer>
          <BigText>로그아웃</BigText>
          <RedButton>로그아웃</RedButton>
        </FormContainer>
      </FormSection>
    </StyledSection>
  );
};

const BlueButton = styled.button`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 20px;
  border: none;
  border-radius: 3px;

  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.white};
  background-color: #42a3ff;

  cursor: pointer;
  @media (max-width: 925px) {
    width: 98px;
    font-size: 16px;
    padding: 8px 10px;
  }
`;
const RedButton = styled.button`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 20px;
  border: none;
  border-radius: 3px;

  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.white};
  background-color: ${theme.color.red};

  cursor: pointer;
  @media (max-width: 925px) {
    width: 98px;
    font-size: 16px;
    padding: 8px 10px;
  }
`;
const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Email = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #616161;

  @media (max-width: 925px) {
    font-size: 20px;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 400px;

  @media (max-width: 925px) {
    width: 320px;
    gap: 28px;
  }
`;
const BigText = styled.h1`
  font-size: 28px;
  font-weight: 800;
  @media (max-width: 925px) {
    font-size: 18px;
  }
`;
const SmallText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.color.black};
  @media (max-width: 925px) {
    font-size: 16px;
  }
`;
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 925px) {
    gap: 20px;
  }
`;
const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.sub[1]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Mypage;
