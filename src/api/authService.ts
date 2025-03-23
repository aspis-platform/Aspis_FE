import { AxiosError } from "axios";
import instances, { login } from "./axios";
import { toast } from "react-toastify";

export class AuthService {
  static async login(
    user_email: string,
    user_password: string,
    onSuccess: () => void
  ) {
    try {
      const response = await instances["auth"].post<{
        access_token: string;
        refresh_token: string;
      }>("/user/login", { user_email, user_password });
      login(response.data.access_token, response.data.refresh_token);
      toast.success("성공적으로 로그인 되었습니다!");
      onSuccess();
    } catch (error) {
      if (!(error instanceof AxiosError)) return;

      switch (error.response?.status) {
        case 401:
          toast.error("이름 또는 비밀번호가 틀렸습니다.");
          break;
        case 404:
          toast.error("존재하지 않는 사용자입니다");
          break;
        default:
          toast.error("로그인 중 오류가 발생했습니다.");
          break;
      }
    }
  }

  static async register(name: string, password: string) {
    const body = {
      name,
      password,
    };

    try {
      await instances["auth"].post("/auth/register", body);
      toast.success("회원가입이 완료되었습니다. 로그인해주세요.");
      return true;
    } catch (error) {
      if (!(error instanceof AxiosError)) return false;

      switch (error.response?.status) {
        case 409:
          toast.error("이미 존재하는 사용자입니다.");
          break;
        case 401:
          toast.error("가입할 수 없습니다");
          break;
        default:
          toast.error("회원가입 중 오류가 발생했습니다.");
          break;
      }
      return false;
    }
  }

  static async getStaffList() {
    try {
      const response = await instances["auth"].get("/user");
      return response.data;
    } catch (error) {
      toast.error("스태프를 불러오는데 실패했습니다.");
      return [];
    }
  }

  static async getInviteList() {
    try {
      const response = await instances["auth"].get("/invite/list");
      console.log(response);

      return response.data;
    } catch (error) {
      toast.error("명단을 불러오는데 실패했습니다.");
      return [];
    }
  }

  static async sendInvitation(email: string) {
    try {
      const response = await instances["auth"].post("/invite/set", { email });
      return response.data;
    } catch (error) {
      toast.error("초대를 보내는데 문제가 발생했습니다.");
    }
  }

  static async deleteInvite(key: string) {
    try {
      await instances["auth"].delete(`/invite/delete/${key}`);
      toast.success("성공적으로 초대를 삭제했습니다!");
    } catch (error) {
      toast.error("초대를 삭제하는데 문제가 발생했습니다.");
    }
  }
}
