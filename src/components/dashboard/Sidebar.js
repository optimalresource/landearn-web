import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import logo from '../../assets/images/logo-white.svg'
import Links from './Links'

function Sidebar(props) {
  return (
    <div className="flex justify-center">
      <div className="logo flex-col justify-items-center">
        <div className="logo1">
          <img src={logo} alt="" />
        </div>
        <div className="links mt-10">
          <Router>
            <Links className='font-bold' url='/' title='Dashboard'/>
            <Links url='/' title='My offers'/>
            <Links url='/' title='My properties'/>
            <Links url='/' title='Explore Properties'/>
            <Links url='/' title='My Documents'/>
            <Links url='/' title='Chat Board'/>
            <Links url='/' title='Tour visits'/>

          </Router>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
