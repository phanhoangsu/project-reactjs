import React, { createContext, useContext, useState } from "react";

const AuthaContext = createContext();

// bọc toàn bộ ứng dụng
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthaContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthaContext.Provider>
  );
};

export const useAuth = () => useContext(AuthaContext);
