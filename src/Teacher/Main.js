import React from "react";
import './index.css'
import Attendance from "./Attendance";

import Progress from "./Progress";
import TimeTable from "./TimeTable";
export default function Main(){
    return (
        <div className="Main">
            <Attendance />
            <Progress />
            <TimeTable />
        </div>
    );

}
