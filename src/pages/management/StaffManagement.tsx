import { theme } from "../../style/theme";
import styled from "styled-components";
import plus_icon from "../../assets/plus-icon.svg";
import check from "../../assets/check-icon.svg";
import cross from "../../assets/cross-icon.svg";
import { useState } from "react";
import axios from "axios";

const StaffManagement = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const [staffList, setStaffList] = useState([]);

  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleAddStaff = async () => {
    if (!email || !userName) {
    }

    setIsAdd(true);

    try {
      const response = await axios.post(
        "https://aspis-auth-api.ncloud.sbs/invite/set",
        { email }
      );

      if (response.data && response.data.key) {
        const newStaff = {
          id: response.data.key,
          name: userName,
          email: email,
          joined: false,
        };

        setStaffList((prev) => [...prev, newStaff]);
        setUserName("");
        setEmail("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledSection>
      <Title>스태프</Title>
      <StyledTable>
        <AddButton onClick={handleAddStaff}>
          <p>추가</p>
          <img src={plus_icon} alt="" />
        </AddButton>
        <Table>
          <Thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>가입 여부</Th>
            </tr>
          </Thead>
          <Tbody>
            {staffList.map((staff) => (
              <Tr key={staff.id}>
                <Td>{staff.name}</Td>
                <Td>{staff.email}</Td>
                <Td>
                  {staff.joined ? (
                    <img src={check} alt="" />
                  ) : (
                    <img src={cross} alt="" />
                  )}
                </Td>
                <Td>
                  <ActionButton>수정</ActionButton>
                  <ActionButton>삭제</ActionButton>
                </Td>
              </Tr>
            ))}

            {isAdd && (
              <Tr>
                <Td>
                  <StyledInput
                    autoFocus
                    onChange={(e) => onUserNameChange(e)}
                  />
                </Td>
                <Td>
                  <StyledInput onChange={(e) => onEmailChange(e)} />
                </Td>
                <Td></Td>
                <Td>
                  <ActionButton>완료</ActionButton>
                  <ActionButton>취소</ActionButton>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </StyledTable>
    </StyledSection>
  );
};

const StyledInput = styled.input`
  width: 60%;
  height: 32px;
  border-radius: 5px;
  border: 1px solid ${theme.color.sub[2]};
  padding-left: 8px;
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
`;
const Td = styled.td`
  padding: 12px;

  &:last-child {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
  }
`;
const Tr = styled.tr`
  border-bottom: 2px solid ${theme.color.sub[2]};
`;
const Th = styled.th`
  padding: 12px;
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
`;
const AddButton = styled.button`
  width: 76px;
  height: 36px;
  background-color: ${theme.color.white};
  border: 2px solid ${theme.color.sub[2]};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
const StyledTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.color.main[4]};
`;
const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  background-color: ${theme.color.sub[1]};
  padding: 80px 8%;
`;

export default StaffManagement;
