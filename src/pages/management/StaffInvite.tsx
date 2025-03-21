import { theme } from "../../style/theme";
import styled from "styled-components";
import plus from "../../assets/plus-icon.svg";
import { useEffect, useState } from "react";
import { AuthService } from "../../api/authService";
import StaffInviteModal from "../../components/StaffInviteModal";

const StaffInvite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  type Staff = { email: string };
  const [staffList, setStaffList] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AuthService.getInviteList();
      setStaffList(response);
    };

    fetchData();
  }, []);

  return (
    <StyledSection>
      <TopSection>
        <Title>스태프 초대</Title>
        <AddButton
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <img src={plus} />
          스태프 초대
        </AddButton>
      </TopSection>

      <Table>
        <Thead>
          <tr>
            <Th>이메일</Th>
          </tr>
        </Thead>
        <Tbody>
          {staffList.map((staff, index) => (
            <Tr key={index}>
              <Td>{staff.email}</Td>
              <Td>
                <ActionButton>삭제</ActionButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isModalOpen && (
        <StaffInviteModal
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </StyledSection>
  );
};

const ActionButton = styled.button`
  width: 52px;
  height: 32px;
  background-color: ${theme.color.white};
  border: 2px solid ${theme.color.sub[2]};
  border-radius: 10px;
  cursor: pointer;
`;
const Tbody = styled.tbody`
  border: 2px solid ${theme.color.sub[2]};
`;
const Thead = styled.thead`
  border: 2px solid ${theme.color.sub[2]};
`;
const Td = styled.td`
  padding: 12px;
  text-align: left;

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
`;
const Table = styled.table`
  width: 100%;
  background-color: ${theme.color.white};
  border-collapse: collapse;
  table-layout: fixed;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: black;
`;
const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 60px;

  background-color: white;
  padding: 80px 8%;
`;

const TopSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const AddButton = styled.button`
  width: 172px;
  height: 56px;
  background-color: ${theme.color.sub[2]};
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`;

export default StaffInvite;
