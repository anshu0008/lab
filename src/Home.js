import React from "react";
import { Link } from "react-router-dom";
import teacher from './images/teacher.gif'
import student from './images/students.gif'

const Home = () => {
  return (
    <div className="home">
      <Link to="teacher">
        <div className="teacher">
          <img src={teacher} alt="teacher" height={100} width={100} />
        </div>
      </Link>
      <Link to="student">
        <div className="student">
          <img src={student} alt="student" height={100} width={100} />
        </div>
      </Link>
    </div>
  );
};

export default Home;
