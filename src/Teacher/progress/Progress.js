import React from 'react'
import { Link } from 'react-router-dom';
export default function Progress(){
    return(
        <div className="Progress-Main">
            <Link to='sem1'><div className="sem"></div></Link>
            <div className="sem"></div>
            <div className="sem"></div>
            <div className="sem"></div>
            <div className="sem"></div>
            <div className="sem"></div>
            <div className="sem"></div>
            <div className="sem"></div>
        </div>
    );
}