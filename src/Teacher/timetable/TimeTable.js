import Tracker from "../../components/Tracker";

export default function TimeTable (){
    return(
        <div className="TimeTable">
             <div className="Attendance">
        <div class="main">
        <div class="container">
          <h1>Weekly Timetable</h1>
          <div class="grid">
            <div class="header">Time</div>
            <div class="header">Monday</div>
            <div class="header">Tuesday</div>
            <div class="header">Wednesday</div>
            <div class="header">Thursday</div>
            <div class="header">Friday</div>
            <div class="header">Saturday</div>

            <div class="time-slot">9:00 - 10:00</div>
            <div class="slot"></div>
            <div class="slot">IWP (SKB)</div>
            <div class="slot">IWP (SKB)</div>
            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot">AI (PKD)</div>

            <div class="time-slot">10:00 - 11:00</div>
            <div class="slot"></div>
            <div class="slot">AI (PKD)</div>
            <div class="slot">AI (PKD)</div>
            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot">IWP (SKB)</div>

            <div class="time-slot">11:00 - 12:00</div>
            <div class="slot">Seminar (SK)</div>
            <div class="slot">IWP Lab (SKB)</div>
            <div class="slot">PDC (SS)</div>
            <div class="slot">OE</div>
            <div class="slot">OE</div>
            <div class="slot">OE</div>

            <div class="time-slot">12:00 - 1:00</div>
            <div class="slot">Seminar (SK)</div>
            <div class="slot">IWP Lab (SKB)</div>
            <div class="slot">PDC (SS)</div>
            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot"></div>

            <div class="time-slot">3:00 - 4:00</div>
            <div class="slot">PDC(SS)</div>
            <div class="slot">Project - I (All Faculties)</div>
            <div class="slot"></div>
            <div class="slot">PDC (SS)</div>
            <div class="slot"></div>
            <div class="slot"></div>

            <div class="time-slot">4:00 - 5:00</div>
            <div class="slot">AI(PKD)</div>
            <div class="slot">Project - I (All Faculties)</div>
            <div class="slot"></div>
            <div class="slot">IWP (SKB)</div>
            <div class="slot"></div>
            <div class="slot"></div>
          </div>
        </div> 
         <div class="attendance">
          <h1>Attendance</h1>
          <div class="container2">
            <Tracker subject={'OE'} percentage={'50%'} />
            <Tracker subject={'Seminar (SK)'} percentage={'10%'} />
            <Tracker subject={'PDC (SS)'} percentage={'20%'} />
            <Tracker subject={'IWP Lab (SKB)'} percentage={'90%'} />
            <Tracker subject={'AI (PKD)'} percentage={'60%'} />
            <Tracker subject={'IWP (SKB)'} percentage={'70%'} />
          </div>
        </div>
      </div> 
    </div>
        </div>
    );
}