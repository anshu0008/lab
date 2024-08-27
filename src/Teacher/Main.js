import React from "react";
import './index.css'
import Attendance from "./attendance/Attendance";
import { Route,Routes } from "react-router-dom";

import Progress from "./progress/Progress";
import TimeTable from "./timetable/TimeTable";
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
