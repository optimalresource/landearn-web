import React from 'react'
import './index.css'
import LegalIcon from '../../../assets/images/mobile/legal.svg'
import VerifiedIcon from '../../../assets/images/mobile/verified.svg'
import SupportIcon from '../../../assets/images/mobile/support.svg'

const ThreeAside = () => {
    return (
        <div className="benefits_wrap">
            <div className="benefits border-1px-dark300">
                <div className="frame-19">
                <img
                    className="iconssupportagentblack24dp"
                    alt="icon"
                    src={SupportIcon}
                />
                <div className="text-10 axiforma-bold-amazon-18px">Free support</div>
                </div>
                <p className="text-11 axiforma-regular-normal-black-14px">
                    One year support on your home inspection, enquiry or issues.
                </p>
            </div>

            <div className="benefits border-1px-dark300">
                <div className="frame-19">
                <img
                    className="iconssupportagentblack24dp"
                    alt="icon"
                    src={VerifiedIcon}
                />
                <div className="text-10 axiforma-bold-amazon-18px">Verified offers</div>
                </div>
                <p className="text-11 axiforma-regular-normal-black-14px">
                    Properties are of valid titles and information stated is as is.
                </p>
            </div>

            <div className="benefits border-1px-dark300">
                <div className="frame-19">
                <img
                    className="iconssupportagentblack24dp"
                    alt="icon"
                    src={LegalIcon}
                />
                <div className="text-10 axiforma-bold-amazon-18px">Legal help</div>
                </div>
                <p className="text-11 axiforma-regular-normal-black-14px">
                    Documents are prepared for you by Landearn legal team.
                </p>
            </div>
        </div>
    )
}

export default ThreeAside;