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
                                <div class="frame-84">
                                    <div class="frame-81">
                                        <img
                                        class="banner2-1"
                                        alt="how to buy"
                                        src={ how.pic }
                                        />
                                    </div>
                                    <div class="frame-83">
                                        <div class="step axiforma-bold-jumbo-10px">{ how.step }</div>
                                        <div class="frame-82">
                                        <div class="text-1 axiforma-bold-amazon-18px">{ how.title }</div>
                                        <p class="text-2 axiforma-regular-normal-black-14px">
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