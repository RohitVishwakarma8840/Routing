import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

function Navbar() {
  return (
    <div className="nav-div">
        <ul>
          <Link to="/"> <li>Home </li> </Link>
             <Link to="/about"> <li>About</li> </Link>
             <Link to="/contact"> <li>Contact us </li></Link>
             <Link to="/teachers"> <li>Teachers</li></Link>
            
             </ul>
       
    </div>
  )
}

export default Navbar
