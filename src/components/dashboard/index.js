import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import '../../../src/index.css'
import './index.css'

function Dashboard(props) {
  return (
    <div>
      <div className="flex contain p-8">
        <div className=' sidebar w-80 text-white rounded-3xl'>
          <Sidebar />
        </div>
        <div className=' mx-auto'>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
