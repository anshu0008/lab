import "./App.css";
import React from "react";
import Tracker from "./components/Tracker";
import { Routes,Route } from "react-router-dom";
import Main from "./Teacher/Main";
import StudentMain from "./student/main";
import Home from "./Home";
import Attendance from "./Teacher/attendance/Attendance";
import Progress from "./Teacher/progress/Progress";
import TimeTable from "./Teacher/timetable/TimeTable";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Main />} />

            <Route path="/teacher/attendance" element={<Attendance />} />
            <Route path="/teacher/progress" element={<Progress />} />
            <Route path="/teacher/timetable" element={<TimeTable />} />



        <Route path="/student" element={<StudentMain />} />
      </Routes>
    
    </div>
  );
};

export default App;