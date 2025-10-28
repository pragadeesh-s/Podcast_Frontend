import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Update from "./Components/Update";
import Delete from "./Components/Delete";

function App() {
  const navStyle = {
    background: "#1e88e5",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    borderBottom: "3px solid #1565c0",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const linkHover = {
    textDecoration: "underline",
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/add" style={linkStyle}>
            Add
          </Link>
          <Link to="/update" style={linkStyle}>
            Update
          </Link>
          <Link to="/delete" style={linkStyle}>
            Delete
          </Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
