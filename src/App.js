import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/themeContext";
import { AuthProvider, AuthContext } from "./context/authContext";
import React, { useContext } from "react";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Rewards from "./pages/Rewards";
import NoPage from "./pages/NoPage";
import ResetPassword from "./pages/ResetPassword";

const ProtectedRoutes = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <Routes>
      {userToken !== null ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NoPage />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </>
      )}
    </Routes>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </AuthProvider>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
