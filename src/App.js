import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
