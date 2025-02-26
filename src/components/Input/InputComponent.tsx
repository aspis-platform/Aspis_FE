import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";

interface Props {
  label: string;
}

const InputComponent = (props: Props) => {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <Input type="text" />
    </InputContainer>
  );
};

const Label = styled.div`
  font-size: 20px;
  font-weight: 200;
  color: ${theme.color.black};
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid ${theme.color.black};
  padding-left: 12px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`;

export default InputComponent;
