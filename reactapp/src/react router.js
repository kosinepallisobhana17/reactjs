

import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'
import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import About from './About'
import Dashboard from './Dashbord'
import Home from './Home'

const App = () => {
  return (
    <div>
        <browserRouter>
        <Navbar />
        <switch>
            <route path="/" exact component={Home}/>
            <route path="/" exact component={Dashboard}/>
            <route path="/" exact component={About}/>
        </switch>
        </browserRouter>
      
    </div>
  )
}

export default App