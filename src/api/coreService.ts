import instances from "./axios";
import { toast } from "react-toastify";

export class CoreService {
  static async getDogInfo() {
    try {
      const response = await instances["core"].get("/v1/animals/get-all");
      return response.data;
    } catch (error) {
      toast.error("정보를 불러오는데 문제가 발생했습니다.");
    }
  }
  static async createDog() {
    try {
      const response = await instances["core"].post("/v1/animals");
      return response.data;
    } catch (error) {}
  }
  static async deleteDog(animalId: string) {
    try {
      await instances["core"].delete(`/v1/animals/${animalId}`);
      toast.success("성공적으로 삭제되었습니다!");
    } catch (error) {
      toast.error("정보를 삭제하는데 문제가 발생했습니다.");
    }
  }
}
