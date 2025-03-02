import { theme } from "../../style/theme";
import styled from "styled-components";

const Mypage = () => {
  return (
    <StyledSection>
      <FormSection>
        <BasicInfo>
          <BigText>기본 정보</BigText>
          <Email>
            <SmallText>이메일</SmallText>
            <p>redroadman@mail.com</p>
          </Email>
        </BasicInfo>

        <BigText>비밀번호 변경</BigText>
        <BigText>로그아웃</BigText>
      </FormSection>
    </StyledSection>
  );
};

const Email = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #616161;
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const BigText = styled.h1`
  font-size: 28px;
  font-weight: 800;
`;
const SmallText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.color.black};
`;
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
