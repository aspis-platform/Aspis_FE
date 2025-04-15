import instances from "./axios";
import { toast } from "react-toastify";

interface Props {
  body: {
    name: string;
    breedId: string;
    helperId: string;
    sex: string;
    isNeutered: boolean;
    animalStatus: string;
    birthYear: number;
    profileUrl: string;
  };
}

export class CoreService {
  static async getDogInfo() {
    try {
      const response = await instances["core"].get("/v1/animals/get-all");
      return response.data;
    } catch (error) {
      toast.error("정보를 불러오는데 문제가 발생했습니다.");
    }
  }
  static async createDog({ body }: Props) {
    try {
      await instances["core"].post("/v1/animals", body);
      toast.success("성공적으로 추가되었습니다!");
    } catch (error) {
      toast.error("정보를 추가하는데 문제가 생겼습니다.");
    }
  }
  static async updateDog(editId: string, { body }: Props) {
    try {
      await instances["core"].put(`/v1/animals/${editId}`, body);
      toast.success("성공적으로 수정되었습니다!");
    } catch (error) {
      toast.error("정보를 수정하는데 문제가 생겼습니다.");
    }
  }
  static async deleteDog(animalId: string) {
    try {
      await instances["core"].delete(`/v1/animals/${animalId}`);
      toast.success("성공적으로 삭제되었습니다!");
    } catch (error) {
      toast.error("정보를 삭제하는데 문제가 발생했습니다.");
    }
  }
  static async getBreed() {
    try {
      const response = await instances["core"].get("/v1/breeds");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  static async getHelper() {
    try {
      const response = await instances["core"].get("/v1/helpers");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
