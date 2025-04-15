import axios, { AxiosError, AxiosInstance } from "axios";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

type ServerType = "auth" | "core" | "upload" | "ai";

const cookies = new Cookies();
const instances: Record<ServerType, AxiosInstance> = <
  Record<ServerType, AxiosInstance>
>{};

export const login = (
  accessToken: string,
  refreshToken: string | undefined
) => {
  cookies.set("accessToken", accessToken);
  if (refreshToken) cookies.set("refreshToken", refreshToken);
};

export const logout = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

function createInstance(type: ServerType, baseUrl: string) {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use((config) => {
    const token = cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!(error instanceof AxiosError)) return Promise.reject(error);

      if (error.response?.status === 401) {
        const refreshToken = cookies.get("refreshToken");
        if (refreshToken) {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_AUTH_URL}/auth/reissue`,
              {
                refresh_token: refreshToken,
              }
            );
            login(response.data.accessToken, undefined);

            const originalRequest = error.config;
            if (originalRequest) {
              originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
              return axios(originalRequest);
            }
          } catch (error) {
            logout();
            location.href = "/login?expired=true";
          }
        } else {
          logout();
          location.href = "/login?expired=true";
        }
      } else if (error.status === 500) {
        toast.error("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요");
      }
      return Promise.reject(error);
    }
  );
  instances[type] = instance;
}

createInstance("auth", import.meta.env.VITE_AUTH_URL);
createInstance("core", import.meta.env.VITE_CORE_URL);
createInstance("upload", import.meta.env.VITE_UPLOAD_URL);
createInstance("ai", import.meta.env.VITE_AI_URL);

export type { ServerType };
export default instances;
