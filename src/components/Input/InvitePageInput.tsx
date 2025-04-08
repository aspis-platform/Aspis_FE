import styled from "styled-components";

interface Prop {
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InvitePageInput = ({ onHandleChange }: Prop) => {
  return (
    <>
      <InputContainer>
        <Label>이메일</Label>
        <Input
          onChange={(event) => onHandleChange(event)}
          type="email"
          autoFocus
          placeholder="example@email.com"
        />
      </InputContainer>
    </>
  );
};

const Input = styled.input`
  width: 400px;
  height: 52px;
  border: 1px solid #aeaeae;
  padding-left: 12px;
  font-size: 20px;
`;
const Label = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export default InvitePageInput;
