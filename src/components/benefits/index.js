import React from 'react'
import './index.css'
import Tab from '../switchable-tab'
import ThreeAside from '../columns/benefits-3-aside-template'

const Benefits = () => {
    return (
        <div className="benefit-wrapper">
            <div className="text axiforma-bold-cod-gray-28px" data-id="70:1998">Some key benefits</div>
            <Tab />
            <ThreeAside />
        </div>
    )
}

export default Benefits;