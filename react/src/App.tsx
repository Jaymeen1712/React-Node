import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
