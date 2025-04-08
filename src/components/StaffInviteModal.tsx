import styled from "styled-components";
import cross from "../assets/thin-cross.svg";
import InvitePageInput from "./Input/InvitePageInput";
import { theme } from "../style/theme";
import { AuthService } from "../api/authService";
import { useState } from "react";
import { toast } from "react-toastify";

interface ModalProp {
  onClose: () => void;
}

const StaffInviteModal = ({ onClose }: ModalProp) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  const emailCheck = (email: string) => {
    if (pattern.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSendInvite = async () => {
    if (!emailCheck(email)) {
      toast.warning("이메일 형식을 지켜주세요.");
      return;
    }

    setIsLoading(true);

    try {
      await AuthService.sendInvitation(email);
      toast.success("초대가 성공적으로 전송되었습니다!");
      onClose();
    } catch (error) {
      toast.success("초대가 성공적으로 전송되었습니다!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <TopSection>
          <CancelButton onClick={onClose}>
            <img src={cross} />
          </CancelButton>
        </TopSection>

        <MainSection>
          <Title>스태프 초대하기</Title>
          <InvitePageInput onHandleChange={(event) => onEmailChange(event)} />
          <StaffInviteButton onClick={onSendInvite} disabled={isLoading}>
            {isLoading ? "초대 보내는 중..." : "초대 보내기"}
          </StaffInviteButton>
        </MainSection>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const StaffInviteButton = styled.button`
  width: 400px;
  height: 52px;
  background-color: ${(props) =>
    props.disabled ? "#d0d0d0" : theme.color.sub[2]};

  font-size: 20px;
  color: white;
  font-weight: 600;

  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const CancelButton = styled.button`
  img {
    width: 28px;
    height: 28px;
  }

  background: none;
  border: none;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  width: 480px;
  height: 360px;
  padding: 16px 16px;
  border-radius: 10px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export default StaffInviteModal;
