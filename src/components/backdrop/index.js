import React from 'react'
import './index.css'

export default function App({ drawerClickHandler }) {
    return <div className="backdrop" onClick={drawerClickHandler} />
}