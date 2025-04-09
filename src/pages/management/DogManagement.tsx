import { theme } from "../../style/theme";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CoreService } from "../../api/coreService";
import plus from "../../assets/plus-icon.svg";
import Table from "src/components/Table/Table";

const DogManagement = () => {
  type DogType = {
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
  };
  const [dogList, setDogList] = useState<DogType[]>([]);
  const [dogTotal, setDogTotal] = useState(0);
  const [isCreate, setIsCreate] = useState(false);

  const [dogName, setDogName] = useState("");
  const [breedId, setBreedId] = useState("");
  const [helperId, setHelperId] = useState("");
  const [sex, setSex] = useState("");
  const [isNeutered, setIsNeutered] = useState(false);
  const [animalStatus, setAnimalStatus] = useState("");
  const [birthYear, setBirthYear] = useState(0);
  const [profileUrl, setprofileUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CoreService.getDogInfo();

        console.log(response);

        const thisYear = new Date().getFullYear();
        const withAge = response.map((dog: Omit<DogType, "age">) => ({
          ...dog,
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

  const handleCreate = () => {
    setIsCreate(!isCreate);
  };

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

      <TableSection>
        <ButtonContainer>
          <AddButton onClick={handleCreate}>
            추가 <img src={plus} alt="" />
          </AddButton>
          <DelButton>선택 삭제</DelButton>
        </ButtonContainer>

        <Table doglist={dogList} />
      </TableSection>
    </StyledSection>
  );
};

const AddButton = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  background-color: ${theme.color.sub[2]};
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 30px;
  }
`;
const DelButton = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  background-color: ${theme.color.red};
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const TableSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
  gap: 48px;
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
