import "./App.css";
import React from "react";
import Tracker from "./components/Tracker";
import { Routes,Route } from "react-router-dom";
import Main from "./Teacher/Main";
import main from "./student/main";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Main />} />
        <Route path="/student" element={<main />} />
      </Routes>
    
    </div>
  );
};

export default App;