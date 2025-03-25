import { createContext, useContext, useState, ReactNode } from "react";

export type Authority = "MANAGER" | "STAFF" | null;

export type User = {
  authority: Authority;
};

const defaultUser: User = {
  authority: null,
};

interface UserContextType {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const login = (userData: User) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
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
