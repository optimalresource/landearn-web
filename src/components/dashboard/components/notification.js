import React from 'react'
import '../index.css'

function notification(props) {
  return (
    <div>
      <div className="notif-body mt-7">
        <h2>{props.body}</h2>
        <h3 className=' opacity-40'>{props.date}</h3>
      </div>
    </div>
  )
}

export default notification
