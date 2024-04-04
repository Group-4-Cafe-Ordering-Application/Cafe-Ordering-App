import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/themeContext";
import { AuthProvider, AuthContext } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import React, { useContext } from "react";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Rewards from "./pages/Rewards";
import NoPage from "./pages/NoPage";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";

const ProtectedRoutes = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <Routes>
      {userToken !== null ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderConfirm" element={<OrderConfirm />} />
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
        <CartProvider>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<ProtectedRoutes />} />
            </Routes>
          </AuthProvider>
        </CartProvider>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
