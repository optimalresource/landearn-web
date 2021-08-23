import React, { useState } from 'react'
import './index.css'

const Tab = ({ click }) => {
    const [active, setActive] = useState(true)
    const [sellerActive, setSellerActive] = useState(false)
    function toggleSwitcher(value) {
        if(value === "sellers") {
            setSellerActive(previous => !previous);
            setActive(previous => !previous);
        }else {
            setSellerActive(previous => !previous);
            setActive(previous => !previous);
        }
        click(value);
    }

    return (
        <div className="x712778">
            <div className="frame-17-fxmCFR">
                <div className={`frame-16-NPPK8P ${active ? "active" : "inactive"}`} onClick={() => toggleSwitcher("buyers")}>
                    <div className="text-8-Bx4pEd ">For buyers</div>
                </div>
                <div className={`frame-15-NPPK8P ${sellerActive ? "active" : "inactive"}`} onClick={() => toggleSwitcher("sellers")}>
                    <div className="text-9-T9vfNx">For sellers</div>
                </div>
            </div>
        </div>
    )
}

export default Tab;