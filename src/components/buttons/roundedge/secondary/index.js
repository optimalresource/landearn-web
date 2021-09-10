import React from 'react'
// import '../../index.css'
import './index.css'

export default function App({ title, url, isTrigger, click}) {
    function handleClick(){
        if (isTrigger) {
            click();
        }else {
            window.open(url, "_top");
        }
    }
  return (
    <div className="x31616" onClick={handleClick}>
        <div className="button-i316164470-SbgD5E">{title}</div>
    </div>
  );
}