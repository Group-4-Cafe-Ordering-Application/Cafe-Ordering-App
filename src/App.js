import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./components/themeContext";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
