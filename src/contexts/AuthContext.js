import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const login = (id, role) => {
    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("user", JSON.stringify({ id, role }));
    setUser({ id, role });
  };

  const logout = () => {
    sessionStorage.setItem("userId", "");
    sessionStorage.setItem("user", JSON.stringify({ id: "", role: "" }));
    setUser({ id: "", role: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
