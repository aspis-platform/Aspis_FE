import check from "../../assets/check-icon.svg";
import cross from "../../assets/cross-icon.svg";
import { theme } from "../../style/theme";
import styled from "styled-components";
import plus from "../../assets/plus-icon.svg";
import { DogType } from "../../pages/management/DogManagement";
import { useState } from "react";
import { toast } from "react-toastify";
import { CoreService } from "../../api/coreService";
import Swal from "sweetalert2";

interface Prop {
  dogList: DogType[];
}

const TableComponent = ({ dogList }: Prop) => {
  const [isCreate, setIsCreate] = useState(false);
  const [dogId, setDogId] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (dogId: string) => {
    setIsSelected(!isSelected);
    setDogId(dogId);
  };

  const handleDelete = () => {
    if (!dogId) {
      toast.warning("삭제할 대상을 선택해주세요.");
      return;
    }

    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "보호견 정보를 삭제하면 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await CoreService.deleteDog(dogId);
      } else {
        toast.info("취소되었습니다.");
      }
    });
  };

  const handleCreate = () => {
    setIsCreate(!isCreate);
  };
  return (
    <>
      <TableSection>
        <ButtonContainer>
          <AddButton onClick={handleCreate}>
            추가 <img src={plus} alt="" />
          </AddButton>
          <DelButton onClick={handleDelete}>선택 삭제</DelButton>
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
            </tr>
          </Thead>
          <Tbody>
            {dogList &&
              dogList.map((dog) => (
                <Tr
                  isSelected={dogId === dog.id}
                  onClick={() => handleSelect(dog.id)}
                  key={dog.id}
                >
                  <Td>{dog.name}</Td>
                  <Td>{dog.age}세</Td>
                  <Td>{dog.sex}</Td>
                  <Td>{dog.breedInfo?.breedName}</Td>
                  <Td>{dog.breedInfo?.breedSize}</Td>
                  <Td>{"dummy"}kg</Td>
                  <Td>
                    {dog.isNeutered ? (
                      <img src={check} alt="" />
                    ) : (
                      <img src={cross} alt="" />
                    )}
                  </Td>
                  <Td>{dog?.helperName}</Td>
                  <Td>{"dummy"}</Td>
                  <Td>{dog.animalStatus}</Td>
                  <Td>
                    <ActionButton>수정</ActionButton>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>

        {isCreate ? (
          <CreateTr>
            <SmallInput placeholder="이름" />
            <SmallInput placeholder="출생연도" type="number" />
            <StyledSelect>
              <option value="FEMALE">여</option>
              <option value="MALE">남</option>
            </StyledSelect>
            <StyledSelect>
              <option>뭐뭐</option>
              <option>뭐뭐</option>
              <option>뭐뭐</option>
            </StyledSelect>
            <StyledSelect>
              <option>대형견</option>
              <option>중형견</option>
              <option>소형견</option>
            </StyledSelect>
            <SmallInput type="number" placeholder="몸무게" />
            <StyledSelect>
              <option>Yes</option>
              <option>No</option>
            </StyledSelect>
            <SmallInput placeholder="대부/대모" />
            <StyledSelect>
              <option value="PRIMARY">보호중</option>
              <option value="TEMPORARY">임시보호</option>
            </StyledSelect>
            <ActionButton>완료</ActionButton>
          </CreateTr>
        ) : (
          ""
        )}
      </TableSection>
    </>
  );
};

export default TableComponent;

const CreateTr = styled.div`
  width: 100%;
  border: 2px solid ${theme.color.sub[2]};
  border-top: none;
  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledSelect = styled.select`
  width: 60px;
  height: 20px;
  font-size: 12px;
  padding-left: 2px;
  border: 1px solid ${theme.color.sub[2]};
  border-radius: 2px;
`;
const SmallInput = styled.input`
  width: 60px;
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
const Tr = styled.tr<{ isSelected: boolean }>`
  border-bottom: 2px solid ${theme.color.sub[2]};
  background-color: ${({ isSelected }) => (isSelected ? "#F4F4F4" : "white")};
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
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 2%;
`;
