import React from 'react'
// import '../../index.css'
import './index.css'

export default function App({title, url, className}) {
    return (
        <a href={url}>
            <div className={`x31615 ${className || ""}`}>
                <div className="button-m-OAYiOw">{title}</div>
            </div>
        </a>
  );
}