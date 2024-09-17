import React from 'react'
import { Link } from 'react-router-dom'
import stud from './images/student.gif'
import tt from './images/tt.png'
import att from './images/atten.gif';

const Home = () => {
  return (
    <div className='Main'>
      
      <Link to='timetable'>
        <div className="TimeTable">
            <img src={tt} alt='TimeTable' height={130} width={130} />
        </div>
      </Link>
      <Link to='progress'>
        <div className="Progress">
            <img src={stud} alt='Progress' height={130} width={130} />
        </div>
      </Link>
      <Link to='attendance'>
        <div className="Attendance">
            <img src={att} alt='Attendance' height={130} width={130} />
        </div>
      </Link>
     
    </div>
  )
}

export default Home
