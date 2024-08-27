import React from "react";
import './index.css'
import Attendance from "./Attendance";
import { Route,Routes } from "react-router-dom";

import Progress from "./Progress";
import TimeTable from "./TimeTable";
import Home from "./Home";
export default function Main(){
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/timetable" element={<TimeTable />} />
            </Routes>

        </div>
    );

}
