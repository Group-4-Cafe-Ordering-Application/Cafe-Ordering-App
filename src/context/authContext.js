import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("userToken");
    const email = Cookies.get("userEmail");
    if (token) {
      setUserToken(token);
    }
    if (email) {
      setUserEmail(email);
    }
  }, [userEmail]);

  const login = (token) => {
    Cookies.set("userToken", token, { expires: 7 }); // Expires in 7 days
    setUserToken(token);

    let email = token._tokenResponse.email;
    Cookies.set("userEmail", email, { expires: 7 }); // Expires in 7 days
    setUserEmail(email);

    navigate("/");
  };

  const logout = () => {
    Cookies.remove("userToken");
    Cookies.remove("userEmail");
    setUserToken(null);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userToken, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
