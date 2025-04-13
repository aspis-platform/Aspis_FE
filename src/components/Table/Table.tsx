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
  onDataChange: () => void;
}

const TableComponent = ({ dogList, onDataChange }: Prop) => {
  // 타입 정의 --------------------------------------------------------
  type BreedList = {
    id: string;
    name: string;
    size: string;
  };
  type HelperList = {
    id: string;
    name: string;
    phoneNumber: string;
  };

  // useState --------------------------------------------------------
  const [breedList, setBreedList] = useState<BreedList[]>([]);
  const [helperList, setHelperList] = useState<HelperList[]>([]);
  const [dogId, setDogId] = useState("");
  const [isCreate, setIsCreate] = useState(false);

  // edit useState --------------------------------------------------------
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editBreedId, setEditBreedId] = useState("");
  const [editSex, setEditSex] = useState("");
  const [editIsNeutered, setEditIsNeutered] = useState(false);
  const [editHelperId, setEditHelperId] = useState("");
  const [editAnimalStatus, setEditAnimalStatus] = useState("");
  const [editBirthYear, setEditBirthYear] = useState<number>(0);

  // 입력값 받는 useState --------------------------------------------------------
  const [name, setName] = useState<string>("");
  const [breedId, setBreedId] = useState<string>("");
  const [helperId, setHelperId] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [isNeutered, setIsNeutered] = useState<boolean>(false);
  const [animalStatus, setAnimalStatus] = useState<string>("");
  const [birthYear, setBirthYear] = useState<number>(0);
  const profileUrl =
    "https://drive.ncloud.sbs/b7fc5de4-ee5b-4829-85d3-ec0e9e119797.png";

  // 토글식 핸들러들 --------------------------------------------------------
  const handleSelect = (clickedId: string) => {
    if (clickedId === dogId) {
      setDogId("");
    } else {
      setDogId(clickedId);
    }
  };
  const handleCreate = () => {
    getBreedList();
    getHelperList();
    setIsCreate(!isCreate);
  };
  const handleEdit = (dog: DogType) => {
    getBreedList();
    getHelperList();

    setEditId(dog.id);
    setEditName(dog.name);
    setEditBreedId(dog.breedId);
    setEditSex(dog.sex);
    setEditIsNeutered(dog.isNeutered);
    setEditHelperId(dog.helperId);
    setEditAnimalStatus(dog.animalStatus);
    setEditBirthYear(dog.birthYear);
  };

  // api 요청 날리는거 --------------------------------------------------------
  const createDog = async () => {
    if (
      !name &&
      !breedId &&
      !helperId &&
      !sex &&
      !isNeutered &&
      !animalStatus &&
      !birthYear &&
      !profileUrl
    ) {
      toast.warning("정보를 모두 입력했는지 확인하세요.");
      return;
    }

    const body = {
      name,
      breedId,
      helperId,
      sex,
      isNeutered,
      animalStatus,
      birthYear,
      profileUrl,
    };

    try {
      await CoreService.createDog({ body });
      onDataChange();
    } catch (error) {
      console.error(error);
    } finally {
      setIsCreate(false);
    }
  };
  const getBreedList = async () => {
    try {
      const response = await CoreService.getBreed();

      setBreedList(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getHelperList = async () => {
    try {
      const response = await CoreService.getHelper();
      setHelperList(response);
    } catch (error) {
      console.error(error);
    }
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
        onDataChange();
      } else {
        toast.info("취소되었습니다.");
      }
    });
  };

  const UpdateDog = async () => {
    if (!editId) return;

    const body = {
      name: editName,
      breedId: editBreedId,
      sex: editSex,
      isNeutered: editIsNeutered,
      helperId: editHelperId,
      animalStatus: editAnimalStatus,
      birthYear: editBirthYear,
      profileUrl,
    };

    try {
      await CoreService.updateDog(editId, { body });
      onDataChange();
      setEditId(null);
    } catch (error) {
      console.error(error);
    }
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
              dogList.map((dog) =>
                editId === dog.id ? (
                  <Tr isSelected={false} key={dog.id}>
                    <Td>
                      <SmallInput
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    </Td>
                    <Td>
                      <SmallInput
                        type="number"
                        value={editBirthYear}
                        onChange={(e) =>
                          setEditBirthYear(Number(e.target.value))
                        }
                      />
                    </Td>
                    <Td>
                      <StyledSelect
                        value={editSex}
                        onChange={(e) => setEditSex(e.target.value)}
                      >
                        <option value="FEMALE">여</option>
                        <option value="MALE">남</option>
                      </StyledSelect>
                    </Td>
                    <Td>
                      <StyledSelect
                        value={editBreedId}
                        onChange={(e) => setEditBreedId(e.target.value)}
                      >
                        {breedList.map((breed) => (
                          <option key={breed.id} value={breed.id}>
                            {breed.name}
                          </option>
                        ))}
                      </StyledSelect>
                    </Td>
                    <Td>
                      <SmallText>
                        크기는 자동으로
                        <br />
                        추가됩니다
                      </SmallText>
                    </Td>
                    <Td>
                      <SmallInput />
                    </Td>
                    <Td>
                      <StyledSelect
                        value={editIsNeutered.toString()}
                        onChange={(e) =>
                          setEditIsNeutered(e.target.value === "true")
                        }
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </StyledSelect>
                    </Td>
                    <Td>
                      <StyledSelect
                        value={editHelperId}
                        onChange={(e) => setEditHelperId(e.target.value)}
                      >
                        {helperList.map((helper) => (
                          <option key={helper.id} value={helper.id}>
                            {helper.name}
                          </option>
                        ))}
                      </StyledSelect>
                    </Td>
                    <Td>
                      <SmallText>
                        입소일은 자동으로
                        <br />
                        추가됩니다
                      </SmallText>
                    </Td>
                    <Td>
                      <StyledSelect
                        value={editAnimalStatus}
                        onChange={(e) => setEditAnimalStatus(e.target.value)}
                      >
                        <option value="PRIMARY">보호중</option>
                        <option value="TEMPORARY">임시보호</option>
                      </StyledSelect>
                    </Td>
                    <Td>
                      <ActionButton onClick={UpdateDog}>완료</ActionButton>
                      <ActionButton onClick={() => setEditId(null)}>
                        취소
                      </ActionButton>
                    </Td>
                  </Tr>
                ) : (
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
                    <Td>{dog.animalStatusDisplay}</Td>
                    <Td>
                      <ActionButton onClick={() => handleEdit(dog)}>
                        수정
                      </ActionButton>
                    </Td>
                  </Tr>
                )
              )}
          </Tbody>
        </Table>

        {isCreate ? (
          <CreateTr>
            <SmallInput
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
            />
            <SmallInput
              onChange={(e) => setBirthYear(Number(e.target.value))}
              placeholder="출생연도"
              type="number"
            />
            <StyledSelect
              defaultValue="성별 선택"
              onChange={(e) => setSex(e.target.value)}
            >
              <option disabled>성별 선택</option>
              <option value="FEMALE">여</option>
              <option value="MALE">남</option>
            </StyledSelect>
            <StyledSelect onChange={(e) => setBreedId(e.target.value)}>
              {breedList &&
                breedList.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
            </StyledSelect>
            <SmallText>
              크기는 자동으로
              <br />
              추가됩니다
            </SmallText>
            <SmallInput type="number" placeholder="몸무게" />
            <StyledSelect
              defaultValue="중성화"
              onChange={(e) => setIsNeutered(e.target.value === "true")}
            >
              <option disabled>중성화</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </StyledSelect>
            <StyledSelect onChange={(e) => setHelperId(e.target.value)}>
              {helperList &&
                helperList.map((helper) => (
                  <option key={helper.id} value={helper.id}>
                    {helper.name}
                  </option>
                ))}
            </StyledSelect>

            <SmallText>
              입소일은 자동으로
              <br />
              추가됩니다
            </SmallText>
            <StyledSelect onChange={(e) => setAnimalStatus(e.target.value)}>
              <option value="PRIMARY">보호중</option>
              <option value="TEMPORARY">임시보호</option>
            </StyledSelect>
            <ActionButton onClick={createDog}>완료</ActionButton>
            <ActionButton onClick={() => setIsCreate(false)}>취소</ActionButton>
          </CreateTr>
        ) : (
          ""
        )}
      </TableSection>
    </>
  );
};

export default TableComponent;

const SmallText = styled.div`
  font-size: 12px;
  color: #6a6a6a;
`;
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
  width: 72px;
  height: 20px;
  font-size: 12px;
  padding-left: 2px;
  border: 1px solid ${theme.color.sub[2]};
  border-radius: 2px;
`;
const SmallInput = styled.input`
  width: 72px;
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
const Tr = styled.tr.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>`
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
