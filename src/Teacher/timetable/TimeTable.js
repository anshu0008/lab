import React from "react";
import Tracker from "../../components/Tracker";

export default function TimeTable() {
  return (
        <div className="attendance-main">
          <div className="container">
            <h1>Weekly Timetable</h1>
            <div className="grid">
              <div className="header">Time</div>
              <div className="header">Monday</div>
              <div className="header">Tuesday</div>
              <div className="header">Wednesday</div>
              <div className="header">Thursday</div>
              <div className="header">Friday</div>
              <div className="header">Saturday</div>

              <div className="time-slot">9:00 - 10:00</div>
              <div className="slot"></div>
              <div className="slot">IWP (SKB)</div>
              <div className="slot">IWP (SKB)</div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot">AI (PKD)</div>

              <div className="time-slot">10:00 - 11:00</div>
              <div className="slot"></div>
              <div className="slot">AI (PKD)</div>
              <div className="slot">AI (PKD)</div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot">IWP (SKB)</div>

              <div className="time-slot">11:00 - 12:00</div>
              <div className="slot">Seminar (SK)</div>
              <div className="slot">IWP Lab (SKB)</div>
              <div className="slot">PDC (SS)</div>
              <div className="slot">OE</div>
              <div className="slot">OE</div>
              <div className="slot">OE</div>

              <div className="time-slot">12:00 - 1:00</div>
              <div className="slot">Seminar (SK)</div>
              <div className="slot">IWP Lab (SKB)</div>
              <div className="slot">PDC (SS)</div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>

              <div className="time-slot">3:00 - 4:00</div>
              <div className="slot">PDC(SS)</div>
              <div className="slot">Project - I (All Faculties)</div>
              <div className="slot"></div>
              <div className="slot">PDC (SS)</div>
              <div className="slot"></div>
              <div className="slot"></div>

              <div className="time-slot">4:00 - 5:00</div>
              <div className="slot">AI(PKD)</div>
              <div className="slot">Project - I (All Faculties)</div>
              <div className="slot"></div>
              <div className="slot">IWP (SKB)</div>
              <div className="slot"></div>
              <div className="slot"></div>
            </div>
          </div>
          {/* <div className="attendance">
            <h1>Attendance</h1>
            <div className="container2">
              <Tracker subject={"OE"} percentage={"50%"} />
              <Tracker subject={"Seminar (SK)"} percentage={"10%"} />
              <Tracker subject={"PDC (SS)"} percentage={"20%"} />
              <Tracker subject={"IWP Lab (SKB)"} percentage={"90%"} />
              <Tracker subject={"AI (PKD)"} percentage={"60%"} />
              <Tracker subject={"IWP (SKB)"} percentage={"70%"} />
            </div>
          </div> */}
        </div>
  );
}
