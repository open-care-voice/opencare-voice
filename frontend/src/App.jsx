import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Login from "./pages/Login";
import Signup from "./pages/signup";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">

        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">
            OpenCare Voice
          </h1>

          <div className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/reportissue" className="hover:text-blue-400 transition">
              Report Issue
            </Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>
          </div>
        </nav>

        {/* Pages */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reportissue" element={<ReportIssue />} />
            <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;