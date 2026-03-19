import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Login from "./pages/Login";
import Signup from "./pages/signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
