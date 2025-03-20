import { theme } from "../../style/theme";
import styled from "styled-components";
import check from "../../assets/check-icon.svg";
import cross from "../../assets/cross-icon.svg";
import plus from "../../assets/plus-icon.svg";

const StaffInvite = () => {
  const staffList = [
    { id: 1, email: "example@email.com", joined: false },
    { id: 2, email: "hello@email.com", joined: true },
  ];

  return (
    <StyledSection>
      <TopSection>
        <TitleSection>
          <Title>스태프 초대</Title>
          <Sup>
            가입 대기중인 스태프 {2}명, 초대된 스태프 {2}명
          </Sup>
        </TitleSection>
        <AddButton>
          <img src={plus} />
          스태프 추가
        </AddButton>
      </TopSection>

      <StyledTable>
        <Table>
          <Thead>
            <tr>
              <Th>이메일</Th>
              <Th>가입 여부</Th>
            </tr>
          </Thead>
          <Tbody>
            {staffList.map((staff) => (
              <Tr key={staff.id}>
                <Td>{staff.email}</Td>
                <Td>
                  {staff.joined ? (
                    <img src={check} alt="" />
                  ) : (
                    <img src={cross} alt="" />
                  )}
                </Td>
                <Td></Td>
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

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Sup = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const TopSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
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
