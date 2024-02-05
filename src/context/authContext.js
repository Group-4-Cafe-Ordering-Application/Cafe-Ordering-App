import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("userToken");
    if (token) {
      setUserToken(token);
    }
  }, []);

  const login = (token) => {
    Cookies.set("userToken", token, { expires: 7 }); // Expires in 7 days
    setUserToken(token);
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("userToken");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
