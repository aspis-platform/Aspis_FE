import { theme } from "../../style/theme";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CoreService } from "../../api/coreService";
import TableComponent from "../../components/Table/Table";

export type DogType = {
  id: string;
  name: string;
  breedId: string;
  breedInfo: {
    breedName: string;
    breedSize: string;
  };
  sex: string;
  animalStatus: string;
  helperId: string;
  helperName: string;
  profileUrl: string;
  isNeutered: boolean;
  birthYear: number;
  age: number;
};

const DogManagement = () => {
  const [dogList, setDogList] = useState<DogType[]>([]);
  const [dogTotal, setDogTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CoreService.getDogInfo();

        console.log(response);

        let dogStatus = "보호중";
        if (response.animalStatus == "PRIMARY") {
          dogStatus = "보호중";
        } else if (response.animalStatus == "TEMPORARY") {
          dogStatus = "임시보호";
        }
        const thisYear = new Date().getFullYear();
        const withAge = response.map((dog: Omit<DogType, "age">) => ({
          ...dog,
          animalStatus: dogStatus,
          age: thisYear - dog.birthYear,
        }));

        setDogList(withAge);
        setDogTotal(response.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledSection>
      <TextContainer>
        <Title>보호중인 애견 목록</Title>
        <InfoContainer>
          <Total>총{dogTotal}마리</Total>{" "}
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
        <BigButton>저장하기</BigButton>
      </ButtonContainer>

      <TableComponent dogList={dogList} />
    </StyledSection>
  );
};

const BigButton = styled.button`
  padding: 12px 32px;
  background-color: ${theme.color.white};
  border: 3px solid ${theme.color.sub[4]};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 925px) {
    padding: 2px 6px;
    font-size: 5px;
    font-weight: 600;
  }
  @media (max-width: 1650px) {
    padding: 8px 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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

  background-color: white;
  padding: 80px 4%;

  display: flex;
  flex-direction: column;
  gap: 56px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: black;

  @media (max-width: 925px) {
    font-size: 24px;
  }
`;

export default DogManagement;
