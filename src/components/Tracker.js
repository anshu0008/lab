import '../index.css'
import React from 'react';
import Chart from './Chart'

export default function Tracker({subject,percentage}) {
  return (
    <div class="tracker">
              <p>{subject}</p>
              <Chart percentage={percentage} />
        </div>
  )
}
