import React from "react";
import '../index.css'
import Attendance from "./attendance/Attendance";
import { Route,Routes } from "react-router-dom";

import Progress from "./progress/Progress";
import TimeTable from "./timetable/TimeTable";
import TeacherHome from "./TeacherHome";
export default function Main(){
    return (
        <div>
            <Routes>
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/" element={<TeacherHome />} />

            </Routes>

        </div>
    );

}
