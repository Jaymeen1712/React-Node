import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import Table from "./pages/othes/table/table";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="table" Component={Table} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
