import { createContext, useContext, useState, ReactNode } from "react";

export type Authority = "MANAGER" | "STAFF" | null;

export type User = {
  authority: Authority;
  password: string;
};

const defaultUser: User = {
  authority: localStorage.getItem("user_authority") as Authority,
  password: "",
};

interface UserContextType {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
  reAuth: (userData: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user_authority", userData.authority || "");
  };
  const logout = () => {
    localStorage.removeItem("user_authority");
    setUser(defaultUser);
  };
  const reAuth = (userData: User) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, reAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
