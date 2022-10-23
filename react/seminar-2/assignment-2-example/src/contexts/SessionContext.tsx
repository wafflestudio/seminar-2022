import { createContext, useContext, useState } from "react";

type SessionContextData = {
  user: {
    id: number;
    username: string;
  } | null;
  login(username: string): void;
  logout(): void;
};

const SessionContext = createContext<SessionContextData>({
  user: null,
  login() {
    throw new Error("SessionContext not provided");
  },
  logout() {
    throw new Error("SessionContext not provided");
  },
});

export function SessionProvider({ children }: any) {
  const [user, setUser] = useState<SessionContextData["user"]>(null);
  function login(username: string) {
    setUser({ id: 1, username });
  }
  function logout() {
    setUser(null);
  }
  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  return useContext(SessionContext);
}
