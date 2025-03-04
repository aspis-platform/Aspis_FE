import { theme } from "../../style/theme";
import styled from "styled-components";
import check from "../../assets/check-icon.svg";
import cross from "../../assets/cross-icon.svg";

// 더미 데이터
const dogList = [
  {
    id: 1,
    name: "홍길동",
    age: 3,
    gender: "암컷",
    breed: "포메라니안",
    size: "소형견",
    weight: 4,
    neutering: true,
    godParent: "홍길동",
    date: "2025.03.04",
    condition: "양호",
    adoptionNTC: true,
  },
  {
    id: 2,
    name: "홍길동",
    age: 3,
    gender: "암컷",
    breed: "포메라니안",
    size: "소형견",
    weight: 4,
    neutering: false,
    godParent: "홍길동",
    date: "2025.03.04",
    condition: "양호",
    adoptionNTC: false,
  },
  {
    id: 3,
    name: "홍길동",
    age: 3,
    gender: "암컷",
    breed: "포메라니안",
    size: "소형견",
    weight: 4,
    neutering: true,
    godParent: "홍길동",
    date: "2025.03.04",
    condition: "양호",
    adoptionNTC: true,
  },
];

const DogManagement = () => {
  return (
    <StyledSection>
      <TextContainer>
        <Title>보호중인 애견 목록</Title>
        <InfoContainer>
          <Total>총{10}마리</Total>{" "}
          <Sup>
            임시보호 {6}마리 일반보호 {4}마리
          </Sup>
        </InfoContainer>
      </TextContainer>

      <ButtonContainer>
        <BigButton>
          선택한 애견 목록
          <br /> 엑셀로 추출하기
        </BigButton>
        <BigButton>
          선택한 애견 목록
          <br /> 네임플레이트 출력하기
        </BigButton>
        <BigButton>선택한 항목 삭제하기</BigButton>
        <BigButton>새로운 항목 추가하기</BigButton>
        <BigButton>저장하기</BigButton>
      </ButtonContainer>
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
            <Th>입양공고</Th>
          </tr>
        </Thead>
        <Tbody>
          {dogList.map((dog) => (
            <Tr key={dog.id}>
              <Td>{dog.name}</Td>
              <Td>{dog.age}세</Td>
              <Td>{dog.gender}</Td>
              <Td>{dog.breed}</Td>
              <Td>{dog.size}</Td>
              <Td>{dog.weight}kg</Td>
              <Td>
                {dog.neutering ? (
                  <img src={check} alt="" />
                ) : (
                  <img src={cross} alt="" />
                )}
              </Td>
              <Td>{dog.godParent}</Td>
              <Td>{dog.date}</Td>
              <Td>{dog.condition}</Td>
              <Td>
                {dog.adoptionNTC ? (
                  <img src={check} alt="" />
                ) : (
                  <img src={cross} alt="" />
                )}
              </Td>
              <Td>
                <ActionButton>수정</ActionButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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

  @media (max-width: 925px) {
    width: 42px;
    height: 22px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 600;
  }
`;
const Td = styled.td`
  padding: 12px;

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
  padding: 12px 4px;
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
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 925px) {
    font-size: 8px;
  }
`;
const BigButton = styled.button`
  padding: 16px 32px;
  background-color: ${theme.color.white};
  border: 4px solid ${theme.color.sub[4]};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 925px) {
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 600;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Total = styled.h4`
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 925px) {
    font-size: 18px;
  }
`;
const Sup = styled.sup`
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 925px) {
    font-size: 14px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 4px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 925px) {
    gap: 10px;
  }
`;
const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  background-color: ${theme.color.sub[1]};
  padding: 80px 8%;

  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.color.main[4]};

  @media (max-width: 925px) {
    font-size: 24px;
  }
`;

export default DogManagement;
