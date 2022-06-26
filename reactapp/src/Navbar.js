import React from 'react'
import {link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        
        <ul>
           <link to="/"> <li>home</li></link>
          <link to="/Dashboard">  <li>Dashboard</li></link>
           <link to="/About"> <li>About</li></link>
        </ul>
    
    </div>
  )
}

export default Navbar
