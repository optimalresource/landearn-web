import React from 'react'
import './index.css'
import { how_to_buy } from '../../data/how-to-buy'

const HowToBuy = () => {
    return (
        <div className="full_how_to_container">
            <div className="text axiforma-bold-cod-gray-28px">How to buy with Landearn</div>
            <div className="full_wrapper">

                { how_to_buy.map((how, index) => {
                        return (
                            <div className="how-to-wrapper" key={index}>
                                <div className="frame-84">
                                    <div className="frame-81">
                                        <img
                                        className="banner2-1"
                                        alt="how to buy"
                                        src={ how.pic }
                                        />
                                    </div>
                                    <div className="frame-83">
                                        <div className="step axiforma-bold-jumbo-10px">{ how.step }</div>
                                        <div className="frame-82">
                                        <div className="text-1 axiforma-bold-amazon-18px">{ how.title }</div>
                                        <p className="text-2 axiforma-regular-normal-black-14px">
                                        { how.description }
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HowToBuy;