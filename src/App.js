import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./components/themeContext";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
