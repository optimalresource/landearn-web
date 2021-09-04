import React from 'react'
import './index.css'
import { partners } from "../../data/partners";

const Partners = () => {
    return (
        <div className="partner-wrapper">
            <div className="partner-title">
                OUR PARTNERS
            </div>

            <div className="partner-logos">
                {
                    partners.map((partner, index) => {
                        return <img src={partner.src} alt={partner.name} className="partner-pic" key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Partners;