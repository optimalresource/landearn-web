import React, { useState } from 'react'
import './index.css'
import Tab from '../switchable-tab'
import ThreeAside from '../columns/benefits-3-aside-template'
import { seller_benefits } from '../../data/seller-benefits'
import { buyer_benefits } from '../../data/buyers-benefits'

const Benefits = () => {
    const [benefitSwitch, SetBenefitSwitch] = useState("buyers");

    function toggleSwitch(value) {
        if(value === "buyers"){
            SetBenefitSwitch("buyers")
        }else {
            SetBenefitSwitch("sellers")
        }
    }

    return (
        <div className="benefit-wrapper">
            <div className="text axiforma-bold-cod-gray-28px">Some key benefits</div>
            <Tab click={toggleSwitch} />
            { benefitSwitch === "buyers" && <ThreeAside benefits={buyer_benefits} more="See all benefits" url="https://landearn.com"  /> }
            { benefitSwitch === "sellers" && <ThreeAside benefits={seller_benefits} more="See all benefits" url="https://landearn.com" /> }
        </div>
    )
}

export default Benefits;