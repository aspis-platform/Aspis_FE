import axios, { AxiosError, AxiosInstance } from "axios";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

type ServerType = "auth" | "core" | "upload" | "ai";

const cookies = new Cookies();
const instances: Record<ServerType, AxiosInstance> = <
  Record<ServerType, AxiosInstance>
>{};

function login(accessToken: string, refreshToken: string | undefined) {
  cookies.set("accessToken", accessToken);
  if (refreshToken) cookies.set("refreshToken", refreshToken);
}

function logout() {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
}

function createInstance(type: ServerType, baseUrl: string) {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + cookies.get("accessToken");
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!(error instanceof AxiosError)) return;
      if (error.status === 401) {
        const refreshToken = cookies.get("refreshToken");
        if (refreshToken) {
          try {
            const response = await axios.post(
              `${import.meta.env.AUTH_URL}/auth/reissue`,
              {
                refresh_token: refreshToken,
              }
            );
            login(response.data.accessToken, undefined);
          } catch (error) {
            location.href = "/login?expired=true";
          }
        } else {
          location.href = "/login?expired=true";
        }
      } else if (error.status === 500) {
        toast.error("펑!@!@! << 서버터지는소리");
      } else {
        throw error;
      }
    }
  );

  instances[type] = instance;
}

createInstance("auth", import.meta.env.VITE_AUTH_URL);
createInstance("core", import.meta.env.VITE_CORE_URL);
createInstance("upload", import.meta.env.VITE_UPLOAD_URL);
createInstance("ai", import.meta.env.VITE_AI_URL);

export { login, logout };
export type { ServerType };
export default instances;
