import "../index.css";
import React, { useEffect } from "react";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Chart = ({ percentage }) => {

  // let jqueryCode=()=>{
  //   $('.chart').easyPieChart({
  //     size: 60,
  //     barColor: "#36e617",
  //     scaleLength: 0,
  //     lineWidth: 8,
  //     trackColor: "#525151",
  //     lineCap: "circle",
  //     animate: 2000,
  //   });
  // }

  // useEffect(() => {
  //   jqueryCode();
  // }, []);


  return (
    <div className="child-container">
      <CircularProgressbar 
      circleRatio={0.1}
value={percentage}
      text={`${percentage}`}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
    
        // Text size
        textSize: '10px',
    
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
    
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
    
        // Colors
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#000',
      })}
      />
      </div>
  );
};

export default Chart;
