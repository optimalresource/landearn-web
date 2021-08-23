import React from 'react'
import './index.css'

const ThreeAside = ({benefits}) => {
    return (
        <div className="benefits_wrap">

            { benefits.map((benefit, index) => {
                return (
                    <div className="benefits border-1px-dark300" key={index}>
                        <div className="frame-19">
                        <img
                            className="iconssupportagentblack24dp"
                            alt="icon"
                            src={benefit.icon}
                        />
                        <div className="text-10 axiforma-bold-amazon-18px">{benefit.title}</div>
                        </div>
                        <p className="text-11 axiforma-regular-normal-black-14px">
                            {benefit.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ThreeAside;