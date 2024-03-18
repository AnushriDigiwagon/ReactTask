import React from "react";
import LoginForm from "./components/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginForm} />
        <Route path="/admin-dashboard" Component={AdminDashboard} />
        <Route path="/user-dashboard" Component={UserDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
