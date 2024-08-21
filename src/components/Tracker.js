import '../App.css'
import React from 'react';
import Chart from './chart'
const Tracker = ({subject,percentage}) => {
    


  return (
    <div class="tracker">
              <p>{subject}</p>
              <Chart percentage={percentage} />
        </div>
  );
};
export default Tracker;
