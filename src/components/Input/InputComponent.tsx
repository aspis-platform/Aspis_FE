import { theme } from "../../style/theme";
import styled from "styled-components";

interface Props {
  type: string;
  label: string;
  onHandleChange: (evnet: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({ label, onHandleChange, type }: Props) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input onChange={(event) => onHandleChange(event)} type={type} />
    </InputContainer>
  );
};

const Label = styled.div`
  font-size: 20px;
  font-weight: 200;
  color: ${theme.color.black};
  @media (max-width: 925px) {
    font-size: 16px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid ${theme.color.black};
  padding-left: 12px;
  font-size: 20px;
  @media (max-width: 925px) {
    height: 40px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`;

export default InputComponent;
