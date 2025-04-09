import React from "react";
import check from "../../assets/check-icon.svg";
import cross from "../../assets/cross-icon.svg";
import { theme } from "../../style/theme";
import styled from "styled-components";

const TableComponent = ({ dogList }) => {
  return (
    <>
      <Table>
        <Thead>
          <tr>
            <Th>이름</Th>
            <Th>나이</Th>
            <Th>성별</Th>
            <Th>견종</Th>
            <Th>크기</Th>
            <Th>몸무게</Th>
            <Th>중성화 여부</Th>
            <Th>대부/대모</Th>
            <Th>입소일</Th>
            <Th>상태</Th>
          </tr>
        </Thead>
        <Tbody>
          {dogList &&
            dogList.map((dog) => (
              <Tr key={dog.id}>
                <Td>{dog.name}</Td>
                <Td>{dog.age}세</Td>
                <Td>{dog.sex}</Td>
                <Td>{"dummy"}</Td>
                <Td>{"dummy"}</Td>
                <Td>{"dummy"}kg</Td>
                <Td>
                  {dog.isNeutered ? (
                    <img src={check} alt="" />
                  ) : (
                    <img src={cross} alt="" />
                  )}
                </Td>
                <Td>{"dummy"}</Td>
                <Td>{"dummy"}</Td>
                <Td>{"dummy"}</Td>
                <Td>
                  <ActionButton>수정</ActionButton>
                </Td>
              </Tr>
            ))}

          {isCreate ? (
            <Tr>
              <Td>
                <SmallInput placeholder="이름" />
              </Td>
              <Td>
                <SmallInput placeholder="출생연도" type="number" />
              </Td>
              <Td>
                <StyledSelect>
                  <option>여</option>
                  <option>남</option>
                </StyledSelect>
              </Td>
              <Td>
                <StyledSelect>
                  <option>뭐뭐</option>
                  <option>뭐뭐</option>
                  <option>뭐뭐</option>
                </StyledSelect>
              </Td>
              <Td>
                <StyledSelect>
                  <option>대형견</option>
                  <option>중형견</option>
                  <option>소형견</option>
                </StyledSelect>
              </Td>
              <Td>
                <SmallInput type="number" placeholder="몸무게" />
              </Td>
              <Td>
                <StyledSelect>
                  <option>Yes</option>
                  <option>No</option>
                </StyledSelect>
              </Td>
              <Td>
                <SmallInput placeholder="대부/대모" />
              </Td>
              <Td></Td>
              <Td>
                <StyledSelect>
                  <option>보호중</option>
                  <option>임시보호중</option>
                </StyledSelect>
              </Td>
              <Td>
                <ActionButton>완료</ActionButton>
              </Td>
            </Tr>
          ) : (
            ""
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default TableComponent;

const StyledSelect = styled.select`
  width: 100%;
  height: 20px;
  font-size: 12px;
  padding-left: 2px;
  border: 1px solid ${theme.color.sub[2]};
  border-radius: 2px;
`;
const SmallInput = styled.input`
  width: 72%;
  height: 20px;
  border: 1px solid ${theme.color.sub[2]};
  border-radius: 2px;
  font-size: 12px;
  padding-left: 4px;
`;
const Tbody = styled.tbody`
  border: 2px solid ${theme.color.sub[2]};
`;
const Thead = styled.thead`
  border: 2px solid ${theme.color.sub[2]};
`;
const ActionButton = styled.button`
  width: 52px;
  height: 32px;
  background-color: ${theme.color.white};
  border: 2px solid ${theme.color.sub[2]};
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 925px) {
    width: 42px;
    height: 22px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 600;
  }
`;
const Td = styled.td`
  padding: 8px;

  &:last-child {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
  }

  @media (max-width: 925px) {
    img {
      width: 14px;
      height: 14px;
    }

    padding: 12px 4px;
  }
`;
const Tr = styled.tr`
  border-bottom: 2px solid ${theme.color.sub[2]};
`;
const Th = styled.th`
  padding: 12px 8px;
  font-weight: 500;
  text-align: left;

  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;
const Table = styled.table`
  width: 100%;
  background-color: ${theme.color.white};
  border-collapse: collapse;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 925px) {
    font-size: 8px;
  }
`;
