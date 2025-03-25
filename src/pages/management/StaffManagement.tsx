import { useEffect, useState } from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";
import { AuthService } from "../../api/authService";
import Swal from "sweetalert2";

const StaffManagement = () => {
  type Staff = {
    id: string;
    user_name: string;
    user_email: string;
    user_authority: string;
  };
  const [staffList, setStaffList] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AuthService.getStaffList();
      setStaffList(response);
    };

    fetchData();
  }, [staffList]);

  const onDeleteStaff = (id: string) => {
    Swal.fire({
      title: "스태프를 삭제하시겠습니까?",
      text: "스태프를 삭제하면 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#df3232",
      cancelButtonColor: "#40b6ed",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await AuthService.deleteStaff(id);
      }
    });
  };

  return (
    <StyledSection>
      <Title>스태프 관리</Title>
      <StyledTable>
        <Table>
          <Thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
            </tr>
          </Thead>
          <Tbody>
            {staffList.map((staff) => (
              <Tr key={staff.id}>
                <Td>{staff.user_name}</Td>
                <Td>{staff.user_email}</Td>
                <Td>
                  <ActionButton onClick={() => onDeleteStaff(staff.id)}>
                    삭제
                  </ActionButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </StyledTable>
    </StyledSection>
  );
};

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
`;
const Table = styled.table`
  width: 100%;
  background-color: ${theme.color.white};
  border-collapse: collapse;
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

export default StaffManagement;
