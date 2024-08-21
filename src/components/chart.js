import "../App.css";
import React, { useEffect } from "react";

const chart = ({ percentage }) => {

    document.querySelector(".chart").easyPieChart({
      size: 60,
      barColor: "#36e617",
      scaleLength: 0,
      lineWidth: 8,
      trackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });

 
  return (
    <div class="child-container">
      <div class="box">
        <div class="chart" data-percent="50">
          <li>{percentage}</li>
        </div>
      </div>
    </div>
  );
};

export default chart;
